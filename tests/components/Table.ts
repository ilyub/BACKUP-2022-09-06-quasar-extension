import { components } from "@";
import * as testUtils from "@/test-utils";
import { fn, is, o, wait } from "@skylib/functions";
import * as functionsTestUtils from "@skylib/functions/dist/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QTable } from "quasar";
import { nextTick } from "vue";

const props = {
  columns: [
    {
      align: "left",
      // eslint-disable-next-line no-restricted-syntax -- Ok
      field: (row: object): string => o.get(row, "name", is.string),
      label: "plain:Sample label 1",
      name: "column1",
      sortable: true,
      width: 100
    },
    {
      align: "left",
      // eslint-disable-next-line no-restricted-syntax -- Ok
      field: (row: object): string => o.get(row, "name", is.string),
      label: "plain:Sample label 2",
      name: "column2",
      width: 100
    },
    {
      align: "left",
      // eslint-disable-next-line no-restricted-syntax -- Ok
      field: (row: object): string => o.get(row, "name", is.string),
      label: "plain:Sample label 3",
      name: "column3"
    }
  ],
  rowKey: "id",
  rows: [
    { id: "key1", name: "Sample row 1" },
    { id: "key2", name: "Sample row 2" },
    { id: "key3", name: "Sample row 3" }
  ]
} as const;

functionsTestUtils.installFakeTimer();

test("prop: columnWidths", () => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props: {
      ...props,
      columnWidths: new Map([["column1", 100]]),
      resizableColumns: true
    }
  });

  const { comp } = testUtils.findFactory("table", wrapper);

  const expected = [[new Map([["column1", 200]])]];

  expect(comp("resizer").props("modelValue")).toBe(100);
  comp("resizer").vm.$emit("update:modelValue", 200);
  expect(wrapper.emitted("update:columnWidths")).toStrictEqual(expected);
});

test("prop: columns", () => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props: {
      ...props,
      columns: [
        {
          align: "left",
          // eslint-disable-next-line no-restricted-syntax -- Ok
          field: (row: object): string => o.get(row, "name", is.string),
          label: "plain:Sample label 1",
          maxWidth: 300,
          minWidth: 100,
          name: "column1",
          sortable: true,
          width: 200
        }
      ]
    }
  });

  const { elem } = testUtils.findFactory("table", wrapper);

  const expected = "max-width: 300px; min-width: 100px; width: 200px;";

  expect(elem("header-cell-wrapper").attributes("style")).toStrictEqual(
    expected
  );
});

test("prop: columnsOrder (update)", async () => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props
  });

  const { comp, compByRef } = testUtils.findFactory("table", wrapper);

  const value = [{ name: "column2" }, { name: "column1" }];

  const columnsOrder = new Map([
    ["column2", 0],
    ["column1", 1]
  ]);

  const expected = [[columnsOrder]];

  compByRef("debugDialog").vm.$emit("update:modelValue", true);
  await nextTick();
  comp("dialog-sortable").vm.$emit("update:modelValue", value);
  expect(wrapper.emitted("update:columnsOrder")).toStrictEqual(expected);
});

test("prop: columnsOrder", async () => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props: {
      ...props,
      columnsOrder: new Map([
        ["column1", 1],
        ["column2", 0]
      ])
    }
  });

  const { compByRef, comps, elems } = testUtils.findFactory("table", wrapper);

  compByRef("debugDialog").vm.$emit("update:modelValue", true);
  await nextTick();

  const texts1 = elems("header-cell").map(elem => elem.text());

  const texts2 = comps("dialog-label").map(elem => elem.text());

  const expected = ["Sample label 2", "Sample label 1", "Sample label 3"];

  expect(texts1).toStrictEqual(expected);
  expect(texts2).toStrictEqual(expected);
});

test.each([
  { expected: fn.identity, externalSorting: true },
  { externalSorting: false }
])("prop: externalSorting", ({ expected, externalSorting }) => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props: { ...props, externalSorting }
  });

  const main = wrapper.findComponent(QTable);

  // eslint-disable-next-line no-restricted-syntax -- Ok
  expect(main.props("sortMethod")).toBe(expected);
});

test.each([
  { expected: [[new Set(["column1"])]] },
  { expected: [[new Set([])]], hiddenColumns: new Set(["column1"]) }
])("prop: hiddenColumns", async ({ expected, hiddenColumns }) => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props: o.removeUndefinedKeys({ ...props, hiddenColumns })
  });

  const { comp, compByRef } = testUtils.findFactory("table", wrapper);

  compByRef("debugDialog").vm.$emit("update:modelValue", true);
  await nextTick();
  await comp("dialog-hidden").trigger("click");
  expect(wrapper.emitted("update:hiddenColumns")).toStrictEqual(expected);
});

test.each([
  { expected: "none" },
  {
    expected: "single",
    multiSelect: false,
    selectByCheckbox: true
  },
  {
    expected: "multiple",
    multiSelect: true,
    selectByRowClick: true
  }
])(
  "prop: multiSelect, selectByRowClick",
  ({ expected, multiSelect, selectByCheckbox, selectByRowClick }) => {
    const wrapper = vueTestUtils.mount(components.Table, {
      global: testUtils.globalMountOptions(),
      props: o.removeUndefinedKeys({
        ...props,
        multiSelect,
        selectByCheckbox,
        selectByRowClick
      })
    });

    const main = wrapper.findComponent(QTable);

    expect(main.props("selection")).toStrictEqual(expected);
  }
);

test.each([
  {
    limit: 15,
    page: 1,
    rowsPerPage: 0,
    sortBy: "column1"
  },
  {
    descending: false,
    limit: 15,
    page: 1,
    rowsPerPage: 0,
    sortBy: "column1"
  }
])("prop: pagination (virtual-scroll)", pagination => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props: { ...props, pagination }
  });

  {
    const expected = [[{ ...pagination, descending: false }]];

    expect(wrapper.emitted("update:pagination")).toStrictEqual(expected);
    testUtils.clearEmitted(wrapper);
  }

  {
    const main = wrapper.findComponent(QTable);

    const rawEvent = {
      direction: "increase",
      from: 0,
      index: 0,
      to: 14
    };

    const expected = [
      [
        {
          ...pagination,
          descending: false,
          limit: 25
        }
      ]
    ];

    main.vm.$emit("virtual-scroll", rawEvent);
    expect(wrapper.emitted("update:pagination")).toStrictEqual(expected);
    testUtils.clearEmitted(wrapper);
  }
});

test.each([
  {
    binaryStateSortOn: true,
    pagination: {
      descending: true,
      page: 1,
      rowsPerPage: 0,
      sortBy: "column1"
    },
    paginationNext: {
      descending: false,
      page: 1,
      rowsPerPage: 0,
      sortBy: "column1"
    }
  },
  {
    binaryStateSortOn: true,
    pagination: {
      descending: false,
      page: 1,
      rowsPerPage: 0,
      sortBy: "column1"
    },
    paginationNext: {
      descending: true,
      page: 1,
      rowsPerPage: 0,
      sortBy: "column1"
    }
  },
  {
    pagination: {
      descending: true,
      page: 1,
      rowsPerPage: 0,
      sortBy: "column1"
    },
    paginationNext: {
      descending: true,
      page: 1,
      rowsPerPage: 0,
      sortBy: null
    }
  }
])(
  "prop: pagination",
  async ({ binaryStateSortOn, pagination, paginationNext }) => {
    const wrapper = vueTestUtils.mount(components.Table, {
      global: testUtils.globalMountOptions(),
      props: o.removeUndefinedKeys({
        ...props,
        binaryStateSortOn,
        pagination
      })
    });

    const { elem } = testUtils.findFactory("table", wrapper);

    {
      const expected = [[pagination]];

      expect(wrapper.emitted("update:pagination")).toStrictEqual(expected);
      testUtils.clearEmitted(wrapper);
    }

    {
      const expected = [[paginationNext]];

      await elem("header-cell").trigger("click");
      expect(wrapper.emitted("update:pagination")).toStrictEqual(expected);
      testUtils.clearEmitted(wrapper);
    }
  }
);

test("prop: rows", () => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props: {
      ...props,
      multiSelect: true,
      rows: [],
      selectByCheckbox: true
    }
  });

  const { comp } = testUtils.findFactory("table", wrapper);

  expect(comp("header-select").props("disable")).toBeTrue();
});

test.each([
  {
    deselectAll: [[[]]],
    selectAll: [[props.rows]],
    toggleSelection: [[props.rows]]
  },
  {
    deselectAll: [[[]]],
    selectAll: [[props.rows]],
    selected: props.rows,
    toggleSelection: [[[]]]
  },
  {
    deselectAll: [[[]]],
    selectAll: [[props.rows]],
    selected: [props.rows[0]],
    toggleSelection: [[[]]]
  }
])(
  "prop: selected (multi-select)",
  async ({ deselectAll, selectAll, selected, toggleSelection }) => {
    const wrapper = vueTestUtils.mount(components.Table, {
      global: testUtils.globalMountOptions(),
      props: o.removeUndefinedKeys({ ...props, selected }),
      slots: {
        "steady-bottom": `
          <template #steady-bottom="{ deselectAll, selectAll, toggleSelection }">
            <button data-debug="table__sample-deselect-all" @click="deselectAll"></button>
            <button data-debug="table__sample-select-all" @click="selectAll"></button>
            <button data-debug="table__sample-toggle-selection" @click="toggleSelection"></button>
          </template>
        `
      }
    });

    const { elem } = testUtils.findFactory("table", wrapper);

    {
      await elem("sample-deselect-all").trigger("click");
      expect(wrapper.emitted("update:selected")).toStrictEqual(deselectAll);
      testUtils.clearEmitted(wrapper);
    }

    {
      await elem("sample-select-all").trigger("click");
      expect(wrapper.emitted("update:selected")).toStrictEqual(selectAll);
      testUtils.clearEmitted(wrapper);
    }

    {
      await elem("sample-toggle-selection").trigger("click");
      expect(wrapper.emitted("update:selected")).toStrictEqual(toggleSelection);
      testUtils.clearEmitted(wrapper);
    }
  }
);

test("prop: selected", async () => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const wrapper = vueTestUtils.mount(components.Table, {
      global: testUtils.globalMountOptions(),
      props: { ...props, selectByRowClick: true }
    });

    const { comp } = testUtils.findFactory("table", wrapper);

    const expected = [[[props.rows[0]]]];

    await wait(1000);
    await comp("body-row", 0).trigger("click");
    expect(wrapper.emitted("update:selected")).toStrictEqual(expected);
  });
});
