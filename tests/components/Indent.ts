import * as vueTestUtils from "@vue/test-utils";

import Indent from "@/components/Indent.vue";
import * as testUtils from "@/testUtils";

test("indent", () => {
  const wrapper = vueTestUtils.mount(Indent, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-indent");
});
