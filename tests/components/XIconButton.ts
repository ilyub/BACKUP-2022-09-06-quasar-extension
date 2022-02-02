import * as vueTestUtils from "@vue/test-utils";

import XIconButton from "@/components/XIconButton.vue";
import * as testUtils from "@/testUtils";

it("XIconButton", () => {
  const wrapper = vueTestUtils.mount(XIconButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("icon-button-group-member");
});
