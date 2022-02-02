import * as vueTestUtils from "@vue/test-utils";

import XNavButton from "@/components/XNavButton.vue";
import * as testUtils from "@/testUtils";

it("XNavButton", () => {
  const wrapper = vueTestUtils.mount(XNavButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("nav-button-group-member");
});
