import * as vueTestUtils from "@vue/test-utils";

import XButton from "@/components/XButton.vue";
import * as testUtils from "@/testUtils";

it("XButton", () => {
  const wrapper = vueTestUtils.mount(XButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("button-group-member");
});
