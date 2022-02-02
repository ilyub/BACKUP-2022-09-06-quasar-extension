import { QMarkupTable } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";

import XPageMarkupTable from "@/components/XPageMarkupTable.vue";
import * as testUtils from "@/testUtils";

it.each([
  {
    extraPageOffset: undefined,
    pageOffset: undefined
  },
  {
    extraPageOffset: undefined,
    pageOffset: "0px"
  },
  {
    extraPageOffset: "10px",
    pageOffset: "15px"
  },
  {
    extraPageOffset: "20px",
    pageOffset: "25px"
  }
])("XPageMarkupTable", ({ extraPageOffset, pageOffset }) => {
  const wrapper = vueTestUtils.mount(XPageMarkupTable, {
    global: testUtils.globalMountOptions(
      o.removeUndefinedKeys({
        pageOffset
      })
    ),
    props: o.removeUndefinedKeys({
      extraPageOffset
    })
  });

  const markupTable = wrapper.findComponent(QMarkupTable);

  const expected = is.not.empty(pageOffset)
    ? `height: calc(100vh - ${pageOffset} - ${extraPageOffset ?? "0px"});`
    : "height: auto;";

  expect(markupTable.attributes("style")).toStrictEqual(expected);
});
