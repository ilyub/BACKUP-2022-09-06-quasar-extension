import { QMarkupTable } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import * as o from "@skylib/functions/es/object";

import PageMarkupTable from "@/components/PageMarkupTable.vue";
import * as testUtils from "@/testUtils";

test.each([
  {
    expected: "height: auto;",
    extraPageOffset: undefined,
    pageOffset: undefined
  },
  {
    expected: "height: calc(100vh - 5px - 0px);",
    extraPageOffset: undefined,
    pageOffset: "5px"
  },
  {
    expected: "height: calc(100vh - 15px - 10px);",
    extraPageOffset: "10px",
    pageOffset: "15px"
  },
  {
    expected: "height: calc(100vh - 25px - 20px);",
    extraPageOffset: "20px",
    pageOffset: "25px"
  }
])("pageMarkupTable", ({ expected, extraPageOffset, pageOffset }) => {
  const wrapper = vueTestUtils.mount(PageMarkupTable, {
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

  expect(markupTable.attributes("style")).toStrictEqual(expected);
});
