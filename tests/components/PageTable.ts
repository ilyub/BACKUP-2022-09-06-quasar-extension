import type { QVirtualScroll } from "quasar";
import { QTable } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import * as fn from "@skylib/functions/es/function";
import * as is from "@skylib/functions/es/guards";
import { wait } from "@skylib/functions/es/helpers";
import * as o from "@skylib/functions/es/object";
import * as functionsTestUtils from "@skylib/functions/es/testUtils";

import type { VirtualScrollEvent } from "@/components/extras/VirtualScroll";
import PageTable from "@/components/PageTable.vue";
import * as testUtils from "@/testUtils";

functionsTestUtils.installFakeTimer();

it.each([
  {
    to: 4
  },
  {
    limit: 15,
    pageOffset: 0,
    to: 14
  },
  {
    extraPageOffset: "10px",
    limit: 25,
    pageOffset: 10,
    to: 24
  },
  {
    bodyCellSlot: "Sample body cell slot",
    extraPageOffset: "20px",
    limit: 35,
    pageOffset: 20,
    pageTableSettings: { growPageBy: 20 },
    selected: [],
    to: 34
  }
])(
  "PageTable",
  async ({
    bodyCellSlot,
    extraPageOffset,
    limit,
    pageOffset,
    pageTableSettings,
    selected,
    to
  }) => {
    await functionsTestUtils.run(async () => {
      const wrapper = vueTestUtils.mount(PageTable, {
        global: testUtils.globalMountOptions(
          o.removeUndefinedKeys({
            pageOffset,
            pageTableSettings
          })
        ),
        props: o.removeUndefinedKeys({
          columns: [
            {
              align: "left",
              field(row: string): string {
                return row;
              },
              label: "Sample label",
              name: "column1"
            }
          ],
          extraPageOffset,
          limit,
          rows: ["Sample row"],
          selected
        }),
        slots: o.removeUndefinedKeys({
          "body-cell": bodyCellSlot
        })
      });

      const table = wrapper.findComponent(QTable);

      {
        await wait(1000);
        expect(table.html()).toInclude(bodyCellSlot ?? "Sample row");
      }

      {
        const expected = fn.run(() => {
          if (is.not.empty(pageOffset)) {
            const po = pageOffset;

            const hh = "60px";

            const py = "15px";

            const epo = extraPageOffset ?? "0px";

            return `height: calc(100vh - ${po}px - ${hh} - 2 * ${py} - ${epo});`;
          }

          return "height: auto;";
        });

        expect(table.attributes("style")).toStrictEqual(expected);
      }

      {
        const event = ["Sample row"];

        table.vm.$emit("update:selected", event);
        expect(wrapper.emitted("update:selected")).toStrictEqual([[event]]);
      }

      {
        const event: VirtualScrollEvent = {
          direction: "increase",
          from: 0,
          index: 0,
          ref: {} as QVirtualScroll,
          to
        };

        const expected =
          is.not.empty(limit) && to === limit - 1
            ? [[limit + (pageTableSettings?.growPageBy ?? 10)]]
            : undefined;

        table.vm.$emit("virtual-scroll", event);
        expect(wrapper.emitted("update:limit")).toStrictEqual(expected);
      }
    });
  }
);
