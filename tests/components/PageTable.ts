import type { QVirtualScroll } from "quasar";
import { QTable } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import * as cast from "@skylib/functions/es/converters";
import { wait } from "@skylib/functions/es/helpers";
import * as o from "@skylib/functions/es/object";
import * as functionsTestUtils from "@skylib/functions/es/testUtils";
import type { unknowns, Writable } from "@skylib/functions/es/types/core";

import type { VirtualScrollEvent } from "@/components/extras/QVirtualScroll";
import type { Columns, Pagination } from "@/components/PageTable.extras";
import PageTable from "@/components/PageTable.vue";
import * as testUtils from "@/testUtils";

beforeAll(functionsTestUtils.installFakeTimer);

test.each([
  {
    expectedHtml: "Sample row",
    expectedLimit: 25,
    expectedStyle: "height: calc(100vh - 10px - 0px);",
    pageOffset: "10px",
    pagination: { limit: 15 },
    to: 14
  },
  {
    bodyCellSlot: "Sample body cell slot",
    expectedHtml: "Sample body cell slot",
    expectedLimit: 45,
    expectedStyle: "height: calc(100vh - 20px - 5px);",
    extraPageOffset: "5px",
    pageOffset: "20px",
    pageTableSettings: { growPageBy: 20 },
    pagination: { limit: 25 },
    selected: [],
    to: 24
  }
])(
  "pageTable",
  async ({
    bodyCellSlot,
    expectedHtml,
    expectedLimit,
    expectedStyle,
    extraPageOffset,
    pageOffset,
    pageTableSettings,
    pagination,
    selected,
    to
  }) => {
    expect.hasAssertions();

    await functionsTestUtils.run(async () => {
      const columns: Columns = [
        {
          align: "left",
          field(row: unknown): string {
            return cast.string(row);
          },
          label: "Sample label",
          name: "column1"
        }
      ];

      const wrapper = vueTestUtils.mount(PageTable, {
        global: testUtils.globalMountOptions(
          o.removeUndefinedKeys({
            pageOffset,
            pageTableSettings
          })
        ),
        props: o.removeUndefinedKeys({
          columns,
          extraPageOffset,
          pagination,
          rows: ["Sample row"],
          selected
        }),
        slots: o.removeUndefinedKeys({
          "body-cell": bodyCellSlot
        })
      });

      const emittedPagination: Writable<unknowns> = [];

      const emittedSelected: Writable<unknowns> = [];

      const table = wrapper.findComponent(QTable);

      {
        await wait(1000);
        expect(table.html()).toInclude(expectedHtml);
        expect(table.attributes("style")).toStrictEqual(expectedStyle);
      }

      {
        const event = ["Sample row"];

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
            rowsPerPage: 0
          })
        ];

        emittedPagination.push(event);
        expect(wrapper.emitted("update:pagination")).toStrictEqual(
          emittedPagination
        );
      }

      {
        const rawEvent: VirtualScrollEvent = {
          direction: "increase",
          from: 0,
          index: 0,
          // eslint-disable-next-line no-type-assertion/no-type-assertion
          ref: {} as QVirtualScroll,
          to
        };

        const event = [{ limit: expectedLimit }];

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

        const event = [
          {
            limit: pagination.limit,
            sortBy: "name"
          }
        ];

        emittedPagination.push(event);
        table.vm.$emit("update:pagination", rawEvent);
        expect(wrapper.emitted("update:pagination")).toStrictEqual(
          emittedPagination
        );
      }
    });
  }
);
