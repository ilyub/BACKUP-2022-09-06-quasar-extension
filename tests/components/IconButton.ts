import * as vueTestUtils from "@vue/test-utils";

import IconButton from "@/components/IconButton.vue";
import * as testUtils from "@/testUtils";

it("IconButton", () => {
  const wrapper = vueTestUtils.mount(IconButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("icon-button-group-member");
});
