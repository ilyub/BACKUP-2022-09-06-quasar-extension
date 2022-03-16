import { QTable } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import { wait } from "@skylib/functions/es/helpers";
import * as o from "@skylib/functions/es/object";
import * as functionsTestUtils from "@skylib/functions/es/testUtils";
import type { objects, Writable } from "@skylib/functions/es/types/core";

import type { VirtualScrollDetails } from "@/components/extras/QVirtualScroll";
import type { Columns, Pagination } from "@/components/Table.extras";
import Table from "@/components/Table.vue";
import * as testUtils from "@/testUtils";

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
  { key: "key1", name: "Sample row 1" },
  { key: "key2", name: "Sample row 2" },
  { key: "key3", name: "Sample row 3" }
];

beforeAll(functionsTestUtils.installFakeTimer);

test.each([
  {
    expectedHtml: "Sample row 1",
    expectedLimit: 25,
    externalSorting: false,
    pagination: { limit: 15, sortBy: "name" },
    to: 14
  },
  {
    bodyCellSlot: "Sample body cell slot",
    expectedHtml: "Sample body cell slot",
    expectedLimit: 45,
    externalSorting: true,
    extraPageOffset: "5px",
    pageTableSettings: { growPageBy: 20 },
    pagination: { descending: false, limit: 25, sortBy: "name" },
    selected: [],
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
    pageTableSettings,
    pagination,
    selected,
    to
  }) => {
    expect.hasAssertions();

    await functionsTestUtils.run(async () => {
      const wrapper = vueTestUtils.mount(Table, {
        global: testUtils.globalMountOptions(
          o.removeUndefinedKeys({ pageTableSettings })
        ),
        props: o.removeUndefinedKeys({
          columns,
          externalSorting,
          extraPageOffset,
          pagination,
          rowKey: "key",
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
        await wait(1000);
        expect(table.html()).toInclude(expectedHtml);
      }

      {
        const event = [{ name: "Sample row 2" }];

        emittedSelected.push([event]);
        table.vm.$emit("update:selected", event);
        await wait(1000);
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

test("row click", () => {
  const wrapper = vueTestUtils.mount(Table, {
    global: testUtils.globalMountOptions(),
    props: o.removeUndefinedKeys({
      columns,
      rowKey: "key",
      rows,
      selectByRowClick: true,
      selected: []
    })
  });

  const table = wrapper.findComponent(QTable);

  const row = a.get(rows, 1);

  table.vm.$emit("rowClick", undefined, row, 1);
  expect(wrapper.emitted("update:selected")).toStrictEqual([[[row]]]);
});

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
      rowKey: "key",
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
