import type { QVirtualScroll } from "quasar";
import { QTable } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";

import type { VirtualScrollEvent } from "@/components/extras/VirtualScroll";
import PageTable from "@/components/PageTable.vue";
import * as testUtils from "@/testUtils";

it.each([
  {
    extraPageOffset: undefined,
    limit: undefined,
    pageOffset: undefined,
    pageTableSettings: undefined,
    to: 4
  },
  {
    extraPageOffset: undefined,
    limit: 15,
    pageOffset: 0,
    pageTableSettings: undefined,
    to: 14
  },
  {
    extraPageOffset: "10px",
    limit: 25,
    pageOffset: 10,
    pageTableSettings: undefined,
    to: 24
  },
  {
    extraPageOffset: "20px",
    limit: 35,
    pageOffset: 20,
    pageTableSettings: { growPageBy: 20 },
    to: 34
  }
])(
  "PageTable",
  ({ extraPageOffset, limit, pageOffset, pageTableSettings, to }) => {
    const wrapper = vueTestUtils.mount(PageTable, {
      global: testUtils.globalMountOptions(
        o.removeUndefinedKeys({
          pageOffset,
          pageTableSettings
        })
      ),
      props: o.removeUndefinedKeys({
        extraPageOffset,
        limit
      })
    });

    const table = wrapper.findComponent(QTable);

    if (is.not.empty(pageOffset)) {
      const po = pageOffset;

      const hh = "60px";

      const py = "15px";

      const epo = extraPageOffset ?? "0px";

      const expected = `height: calc(100vh - ${po}px - ${hh} - 2 * ${py} - ${epo});`;

      expect(table.attributes("style")).toStrictEqual(expected);
    } else expect(table.attributes("style")).toStrictEqual("height: auto;");

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
  }
);
