import { QMarkupTable } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";

import PageMarkupTable from "@/components/PageMarkupTable.vue";
import * as testUtils from "@/testUtils";

it.each([
  {
    extraPageOffset: undefined,
    pageOffset: undefined
  },
  {
    extraPageOffset: "10px",
    pageOffset: 0
  },
  {
    extraPageOffset: "20px",
    pageOffset: 10
  }
])("PageMarkupTable", ({ extraPageOffset, pageOffset }) => {
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

  if (is.not.empty(pageOffset)) {
    const po = pageOffset;

    const hh = "60px";

    const py = "15px";

    const epo = extraPageOffset ?? "0px";

    const expected = `height: calc(100vh - ${po}px - ${hh} - 2 * ${py} - ${epo});`;

    expect(markupTable.attributes("style")).toStrictEqual(expected);
  } else expect(markupTable.attributes("style")).toStrictEqual("height: auto;");
});
