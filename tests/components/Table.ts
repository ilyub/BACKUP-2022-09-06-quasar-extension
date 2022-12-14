/* eslint jest/max-expects: [warn, { max: 3 }] -- Ok */

import * as functionsTestUtils from "@skylib/functions/dist/test-utils";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { ReadonlyMap, ReadonlySet, fn, is, o, wait } from "@skylib/functions";
import { components, extras } from "@";
import { QTable } from "quasar";
import { lang } from "@skylib/facades";
import { nextTick } from "vue";

const Align = extras.Table.Align;

const props = {
  columns: [
    {
      align: Align.left,
      field: (row: object): string => o.get(row, "name", is.string),
      label: lang.plain("Sample label 1"),
      name: "column1",
      sortable: true,
      width: 100
    },
    {
      align: Align.left,
      field: (row: object): string => o.get(row, "name", is.string),
      label: lang.plain("Sample label 2"),
      name: "column2",
      width: 100
    },
    {
      align: Align.left,
      field: (row: object): string => o.get(row, "name", is.string),
      label: lang.plain("Sample label 3"),
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
      columnWidths: new ReadonlyMap([["column1", 100]]),
      resizableColumns: true
    }
  });

  const { comp } = testUtils.findFactory("table", wrapper);

  const expected = [new ReadonlyMap([["column1", 200]])] as const;

  expect(comp("resizer").props("modelValue")).toBe(100);
  comp("resizer").vm.$emit("update:modelValue", 200);
  expect(wrapper).toHaveEmitted("update:columnWidths", expected);
});

test("prop: columns", () => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props: {
      ...props,
      columns: [
        {
          align: Align.left,
          field: (row: object): string => o.get(row, "name", is.string),
          label: lang.plain("Sample label"),
          maxWidth: 300,
          minWidth: 100,
          name: "column",
          sortable: true,
          width: 200
        }
      ]
    }
  });

  const { elem } = testUtils.findFactory("table", wrapper);

  const expected = "max-width: 300px; min-width: 100px; width: 200px;";

  expect(elem("header-cell-wrapper").attributes("style")).toBe(expected);
});

test("prop: columnsOrder", async () => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props: {
      ...props,
      columnsOrder: new ReadonlyMap([
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

  const expected = [
    "Sample label 2",
    "Sample label 1",
    "Sample label 3"
  ] as const;

  expect(texts1).toStrictEqual(expected);
  expect(texts2).toStrictEqual(expected);
});

test("prop: columnsOrder (update)", async () => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props
  });

  const { comp, compByRef } = testUtils.findFactory("table", wrapper);

  const value = [{ name: "column2" }, { name: "column1" }] as const;

  const columnsOrder = new ReadonlyMap([
    ["column2", 0],
    ["column1", 1]
  ]);

  const expected = [columnsOrder] as const;

  compByRef("debugDialog").vm.$emit("update:modelValue", true);
  await nextTick();
  comp("dialog-sortable").vm.$emit("update:modelValue", value);
  expect(wrapper).toHaveEmitted("update:columnsOrder", expected);
});

test.each([
  { expected: fn.identity, externalSorting: true },
  { externalSorting: false }
])("prop: externalSorting", ({ expected, externalSorting }) => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props: { ...props, externalSorting }
  });

  const main = testUtils.findQuasarComponent(wrapper, QTable);

  expect(main.props("sortMethod")).toStrictEqual(expected);
});

test.each([
  { expected: [new ReadonlySet(["column1"])] },
  {
    expected: [new ReadonlySet([])],
    hiddenColumns: new ReadonlySet(["column1"])
  }
])("prop: hiddenColumns", async ({ expected, hiddenColumns }) => {
  const wrapper = vueTestUtils.mount(components.Table, {
    global: testUtils.globalMountOptions(),
    props: o.removeUndefinedKeys({ ...props, hiddenColumns })
  });

  const { comp, compByRef } = testUtils.findFactory("table", wrapper);

  compByRef("debugDialog").vm.$emit("update:modelValue", true);
  await nextTick();
  await comp("dialog-hidden").trigger("click");
  expect(wrapper).toHaveEmitted("update:hiddenColumns", expected);
});

test.each([
  { expected: "none" },
  { expected: "single", multiSelect: false, selectByCheckbox: true },
  { expected: "multiple", multiSelect: true, selectByRowClick: true }
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

    const main = testUtils.findQuasarComponent(wrapper, QTable);

    expect(main.props("selection")).toBe(expected);
  }
);

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
      props: o.removeUndefinedKeys({ ...props, binaryStateSortOn, pagination })
    });

    const { elem } = testUtils.findFactory("table", wrapper);

    {
      const expected = [pagination] as const;

      expect(wrapper).toHaveEmitted("update:pagination", expected);
    }

    {
      const expected = [paginationNext] as const;

      await elem("header-cell").trigger("click");
      expect(wrapper).toHaveEmitted("update:pagination", expected);
    }

    {
      await elem("header-cell", 1).trigger("click");
      expect(wrapper).toHaveEmitted("update:pagination");
    }
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
    const expected = [{ ...pagination, descending: false }] as const;

    expect(wrapper).toHaveEmitted("update:pagination", expected);
  }

  {
    const main = testUtils.findQuasarComponent(wrapper, QTable);

    const rawEvent = {
      direction: "increase",
      from: 0,
      index: 0,
      to: 14
    } as const;

    const expected = [{ ...pagination, descending: false, limit: 25 }] as const;

    main.vm.$emit("virtual-scroll", rawEvent);
    expect(wrapper).toHaveEmitted("update:pagination", expected);
  }
});

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
  { expected: [[props.rows[0], props.rows[1]]], multiSelect: true },
  { expected: [[props.rows[1]]], multiSelect: false }
])("prop: selected", async ({ expected, multiSelect }) => {
  expect.hasAssertions();
  await functionsTestUtils.run(async () => {
    const wrapper = vueTestUtils.mount(components.Table, {
      global: testUtils.globalMountOptions(),
      props: {
        ...props,
        multiSelect,
        selectByRowClick: true,
        selected: [props.rows[0]]
      }
    });

    const { comp } = testUtils.findFactory("table", wrapper);

    await wait(1000);
    await comp("body-row", 1).trigger("click");
    expect(wrapper).toHaveEmitted("update:selected", expected);
  });
});

test.each([
  { deselectAll: [[]], selectAll: [props.rows], toggleSelection: [props.rows] },
  {
    deselectAll: [[]],
    selectAll: [props.rows],
    selected: props.rows,
    toggleSelection: [[]]
  },
  {
    deselectAll: [[]],
    selectAll: [props.rows],
    selected: [props.rows[0]],
    toggleSelection: [[]]
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
      expect(wrapper).toHaveEmitted("update:selected", deselectAll);
    }

    {
      await elem("sample-select-all").trigger("click");
      expect(wrapper).toHaveEmitted("update:selected", selectAll);
    }

    {
      await elem("sample-toggle-selection").trigger("click");
      expect(wrapper).toHaveEmitted("update:selected", toggleSelection);
    }
  }
);
