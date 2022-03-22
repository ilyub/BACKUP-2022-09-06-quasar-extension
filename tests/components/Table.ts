import { QTable } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import * as assert from "@skylib/functions/es/assertions";
import * as cast from "@skylib/functions/es/converters";
import * as is from "@skylib/functions/es/guards";
import { wait } from "@skylib/functions/es/helpers";
import * as o from "@skylib/functions/es/object";
import * as reflect from "@skylib/functions/es/reflect";
import * as functionsTestUtils from "@skylib/functions/es/testUtils";
import type { objects, Writable } from "@skylib/functions/es/types/core";

import type { VirtualScrollDetails } from "@/components/extras/QVirtualScroll";
import type {
  Column,
  Columns,
  Pagination,
  TableOwnProps,
  TableSettings
} from "@/components/Table.extras";
import Table from "@/components/Table.vue";
import * as testUtils from "@/testUtils";

// eslint-disable-next-line no-warning-comments
// fixme: Use @skylib/functions
function typedef<T>(source: T): T {
  return source;
}

const columns: Columns = [
  {
    align: "left",
    field(row): string {
      assert.object.of(row, { name: is.string }, {});

      return row.name;
    },
    label: "Sample label",
    name: "column"
  }
];

const rows = [
  { id: "key1", name: "Sample row 1" },
  { id: "key2", name: "Sample row 2" },
  { id: "key3", name: "Sample row 3" }
];

beforeAll(functionsTestUtils.installFakeTimer);

test.each([
  {
    expectedHtml: "Sample row 1",
    expectedLimit: 25,
    externalSorting: false,
    pagination: {
      limit: 15,
      sortBy: "name"
    },
    to: 14
  },
  {
    bodyCellSlot: "Sample body cell slot",
    expectedHtml: "Sample body cell slot",
    expectedLimit: 45,
    externalSorting: true,
    extraPageOffset: "5px",
    pagination: {
      descending: false,
      limit: 25,
      sortBy: "name"
    },
    selected: [],
    tableSettings: {
      binaryStateSort: false,
      flat: false,
      growPageBy: 20,
      headerSeparator: false,
      square: false
    },
    to: 24
  }
])(
  "pageTable",
  async ({
    bodyCellSlot,
    expectedHtml,
    expectedLimit,
    externalSorting,
    extraPageOffset,
    pagination,
    selected,
    tableSettings,
    to
  }) => {
    expect.hasAssertions();

    await functionsTestUtils.run(async () => {
      const wrapper = vueTestUtils.mount(Table, {
        global: testUtils.globalMountOptions(
          o.removeUndefinedKeys({ tableSettings })
        ),
        props: o.removeUndefinedKeys({
          columns,
          externalSorting,
          extraPageOffset,
          pagination,
          rowKey: "id",
          rows,
          selected
        }),
        slots: o.removeUndefinedKeys({
          "body-cell": bodyCellSlot
        })
      });

      const emittedPagination: Writable<objects> = [];

      const emittedSelected: Writable<objects> = [];

      const table = wrapper.findComponent(QTable);

      {
        await wait(100);
        expect(table.html()).toInclude(expectedHtml);
      }

      {
        const event = [{ name: "Sample row 2" }];

        emittedSelected.push([event]);
        table.vm.$emit("update:selected", event);
        await wait(100);
        expect(wrapper.emitted("update:selected")).toStrictEqual(
          emittedSelected
        );
      }

      {
        const event = [
          o.removeUndefinedKeys({
            descending: false,
            limit: pagination.limit,
            page: 1,
            rowsPerPage: 0,
            sortBy: "name"
          })
        ];

        emittedPagination.push(event);
        expect(wrapper.emitted("update:pagination")).toStrictEqual(
          emittedPagination
        );
      }

      {
        const rawEvent: VirtualScrollDetails = {
          direction: "increase",
          from: 0,
          index: 0,
          to
        };

        const event = [{ ...pagination, limit: expectedLimit }];

        emittedPagination.push(event);
        table.vm.$emit("virtual-scroll", rawEvent);
        expect(wrapper.emitted("update:pagination")).toStrictEqual(
          emittedPagination
        );
      }

      {
        const rawEvent: Pagination = { descending: true };

        const event = [
          {
            descending: true,
            limit: pagination.limit
          }
        ];

        emittedPagination.push(event);
        table.vm.$emit("update:pagination", rawEvent);
        expect(wrapper.emitted("update:pagination")).toStrictEqual(
          emittedPagination
        );
      }

      {
        const rawEvent: Pagination = { sortBy: "name" };

        const event = [{ ...pagination, limit: pagination.limit }];

        emittedPagination.push(event);
        table.vm.$emit("update:pagination", rawEvent);
        expect(wrapper.emitted("update:pagination")).toStrictEqual(
          emittedPagination
        );
      }
    });
  }
);

test.each([
  {
    expectedEmitted: [[rows]],
    expectedText: "Select",
    selected: []
  },
  {
    expectedEmitted: [[[]]],
    expectedText: "Deselect",
    selected: rows.slice(1, 2)
  },
  {
    expectedEmitted: [[[]]],
    expectedText: "Deselect",
    selected: rows
  }
])("selected", async ({ expectedEmitted, expectedText, selected }) => {
  const wrapper = vueTestUtils.mount(Table, {
    global: testUtils.globalMountOptions(),
    props: o.removeUndefinedKeys({
      columns,
      rowKey: "id",
      rows,
      selectByRowClick: true,
      selected
    }),
    slots: {
      "steady-bottom": `
        <template #steady-bottom="{ allSelected, allSelectedClick }">
          <button class="ref-table-steady-bottom" @click="allSelectedClick">
            {{ allSelected === false ? "Select" : "Deselect" }}
          </button>
        </template>
      `
    }
  });

  const elem = testUtils.findElementFactory(".ref-table-", wrapper);

  expect(elem("steady-bottom").text()).toStrictEqual(expectedText);
  await elem("steady-bottom").trigger("click");
  expect(wrapper.emitted("update:selected")).toStrictEqual(expectedEmitted);
});

test("rowClick", async () => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const wrapper = vueTestUtils.mount(Table, {
      global: testUtils.globalMountOptions(),
      props: o.removeUndefinedKeys({
        columns: typedef<Columns>([
          {
            align: "left",
            field(row): string {
              return cast.string(reflect.get(row, "name"));
            },
            label: "Sample label",
            name: "column"
          }
        ]),
        rowKey: "id",
        rows: [
          { id: "key1", name: "Sample row 1" },
          { id: "key2", name: "Sample row 2" },
          { id: "key3", name: "Sample row 3" }
        ],
        selectByRowClick: true
      })
    });

    const elem = testUtils.findElementFactory(".m-table__", wrapper);

    await wait(100);
    await elem("select-by-row-click").trigger("click");
    expect(wrapper.emitted("update:selected")).toStrictEqual([[[rows[0]]]]);
  });
});

test.each([
  {
    expectedSelection: "none"
  },
  {
    expectedSelection: "single",
    multiselect: false,
    selectByCheckbox: true
  },
  {
    expectedSelection: "multiple",
    multiselect: true,
    selectByRowClick: true
  }
])(
  "selection",
  ({ expectedSelection, multiselect, selectByCheckbox, selectByRowClick }) => {
    const wrapper = vueTestUtils.mount(Table, {
      global: testUtils.globalMountOptions(),
      props: o.removeUndefinedKeys({
        columns: typedef<Columns>([
          {
            align: "left",
            field(row): string {
              return cast.string(reflect.get(row, "name"));
            },
            label: "Sample label",
            name: "column"
          }
        ]),
        multiselect,
        rowKey: "id",
        rows: [
          { id: "key1", name: "Sample row 1" },
          { id: "key2", name: "Sample row 2" },
          { id: "key3", name: "Sample row 3" }
        ],
        selectByCheckbox,
        selectByRowClick
      })
    });

    const compByRef = testUtils.findComponentByRefFactory(wrapper);

    const main = compByRef("main");

    expect(main.props("selection")).toStrictEqual(expectedSelection);
  }
);

test.each([
  {},
  {
    expectedStyle: "max-width: 300px; min-width: 100px; width: 200px;",
    maxWidth: 300,
    minWidth: 100,
    width: 200
  }
])("selection", async ({ expectedStyle, maxWidth, minWidth, width }) => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const wrapper = vueTestUtils.mount(Table, {
      global: testUtils.globalMountOptions(),
      props: o.removeUndefinedKeys({
        columns: [
          o.removeUndefinedKeys<Column>({
            align: "left",
            field(row): string {
              return cast.string(reflect.get(row, "name"));
            },
            label: "Sample label",
            maxWidth,
            minWidth,
            name: "column",
            width
          })
        ],
        rowKey: "id",
        rows: [
          { id: "key1", name: "Sample row 1" },
          { id: "key2", name: "Sample row 2" },
          { id: "key3", name: "Sample row 3" }
        ]
      })
    });

    const elem = testUtils.findElementFactory(".m-table__", wrapper);

    await wait(100);
    expect(elem("header-cell__wrapper").attributes("style")).toBe(
      expectedStyle
    );
  });
});

test.each([
  {
    expected: [[new Set()]],
    index: 0
  },
  {
    expected: [[new Set(["column1", "column2"])]],
    index: 1
  }
])("hiddenColumns", async ({ expected, index }) => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const wrapper = vueTestUtils.mount(Table, {
      global: testUtils.globalMountOptions(),
      props: o.removeUndefinedKeys<TableOwnProps>({
        columns: [
          {
            align: "left",
            field(row): string {
              return cast.string(reflect.get(row, "name"));
            },
            label: "Sample label 1",
            name: "column1"
          },
          {
            align: "left",
            field(row): string {
              return cast.string(reflect.get(row, "name"));
            },
            label: "Sample label 2",
            name: "column2"
          }
        ],
        hiddenColumns: new Set(["column1"]),
        rowKey: "id",
        rows: [
          { id: "key1", name: "Sample row 1" },
          { id: "key2", name: "Sample row 2" },
          { id: "key3", name: "Sample row 3" }
        ]
      })
    });

    const { comp, compByRef } = testUtils.findFactory(".m-table__", wrapper);

    compByRef("dialog").vm.$emit("update:modelValue", true);
    await wait(100);
    await comp("dialog__hidden-column", index).trigger("click");
    expect(wrapper.emitted("update:hiddenColumns")).toStrictEqual(expected);
  });
});

test.each([
  {
    expected: [
      [
        new Map([
          ["column1", 0],
          ["column2", 1]
        ])
      ]
    ],
    modelValue: [{ name: "column1" }, { name: "column2" }]
  },
  {
    expected: [
      [
        new Map([
          ["column2", 0],
          ["column1", 1]
        ])
      ]
    ],
    modelValue: [{ name: "column2" }, { name: "column1" }]
  }
])("columnsOrder", async ({ expected, modelValue }) => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const wrapper = vueTestUtils.mount(Table, {
      global: testUtils.globalMountOptions(),
      props: o.removeUndefinedKeys<TableOwnProps>({
        columns: [
          {
            align: "left",
            field(row): string {
              return cast.string(reflect.get(row, "name"));
            },
            label: "Sample label 1",
            name: "column1"
          },
          {
            align: "left",
            field(row): string {
              return cast.string(reflect.get(row, "name"));
            },
            label: "Sample label 2",
            name: "column2"
          }
        ],
        columnsOrder: new Map([["column2", 0]]),
        rowKey: "id",
        rows: [
          { id: "key1", name: "Sample row 1" },
          { id: "key2", name: "Sample row 2" },
          { id: "key3", name: "Sample row 3" }
        ]
      })
    });

    const { comp, compByRef } = testUtils.findFactory(".m-table__", wrapper);

    compByRef("dialog").vm.$emit("update:modelValue", true);
    await wait(100);
    comp("dialog__sortable").vm.$emit("update:modelValue", modelValue);
    expect(wrapper.emitted("update:columnsOrder")).toStrictEqual(expected);
  });
});

test.each([
  {
    pagination: {
      descending: false,
      page: 1,
      rowsPerPage: 0,
      sortBy: "column"
    }
  },
  {
    pagination: {
      descending: true,
      page: 1,
      rowsPerPage: 0,
      sortBy: "column"
    }
  }
])("columnSorting", async ({ pagination }) => {
  const wrapper = vueTestUtils.mount(Table, {
    global: testUtils.globalMountOptions(),
    props: o.removeUndefinedKeys<TableOwnProps>({
      binaryStateSortOn: true,
      columns: [
        {
          align: "left",
          field(row): string {
            return cast.string(reflect.get(row, "name"));
          },
          label: "Sample label",
          name: "column",
          sortable: true
        }
      ],
      pagination,
      rowKey: "id",
      rows: [
        { id: "key1", name: "Sample row 1" },
        { id: "key2", name: "Sample row 2" },
        { id: "key3", name: "Sample row 3" }
      ]
    })
  });

  const elem = testUtils.findElementFactory(".m-table__", wrapper);

  {
    const expected = [[pagination]];

    expect(wrapper.emitted("update:pagination")).toStrictEqual(expected);
    testUtils.clearEmitted(wrapper);
  }

  {
    const expected = [[{ ...pagination, descending: !pagination.descending }]];

    await elem("header-cell").trigger("click");
    expect(wrapper.emitted("update:pagination")).toStrictEqual(expected);
  }
});

test.each([
  {
    tableSettings: typedef<TableSettings>({
      binaryStateSort: false,
      flat: false,
      growPageBy: 20,
      headerSeparator: false,
      square: false
    })
  },
  {
    tableSettings: typedef<TableSettings>({
      binaryStateSort: true,
      flat: true,
      growPageBy: 20,
      headerSeparator: true,
      square: true
    })
  }
])("settings", ({ tableSettings }) => {
  const wrapper = vueTestUtils.mount(Table, {
    global: testUtils.globalMountOptions({ tableSettings }),
    props: o.removeUndefinedKeys<TableOwnProps>({
      columns: [
        {
          align: "left",
          field(row): string {
            return cast.string(reflect.get(row, "name"));
          },
          label: "Sample label",
          name: "column"
        }
      ],
      rowKey: "id",
      rows: [
        { id: "key1", name: "Sample row 1" },
        { id: "key2", name: "Sample row 2" },
        { id: "key3", name: "Sample row 3" }
      ]
    })
  });

  expect(wrapper).toBeDefined();
});

test("columnWidths", () => {
  const wrapper = vueTestUtils.mount(Table, {
    global: testUtils.globalMountOptions(),
    props: o.removeUndefinedKeys<TableOwnProps>({
      columnWidths: new Map([["column1", 150]]),
      columns: [
        {
          align: "left",
          field(row): string {
            return cast.string(reflect.get(row, "name"));
          },
          label: "Sample label 1",
          name: "column1",
          width: 100
        },
        {
          align: "left",
          field(row): string {
            return cast.string(reflect.get(row, "name"));
          },
          label: "Sample label 2",
          name: "column2",
          width: 100
        },
        {
          align: "left",
          field(row): string {
            return cast.string(reflect.get(row, "name"));
          },
          label: "Sample label 3",
          name: "column3"
        }
      ],
      resizableColumns: true,
      rowKey: "id",
      rows: [
        { id: "key1", name: "Sample row 1" },
        { id: "key2", name: "Sample row 2" },
        { id: "key3", name: "Sample row 3" }
      ]
    })
  });

  expect(wrapper).toBeDefined();

  const comp = testUtils.findComponentFactory(".m-table__", wrapper);

  const expected = [[new Map([["column1", 200]])]];

  comp("header-cell__resizer").vm.$emit("update:modelValue", 200);
  expect(wrapper.emitted("update:columnWidths")).toStrictEqual(expected);
});
