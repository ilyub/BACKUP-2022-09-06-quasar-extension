import * as vueTestUtils from "@vue/test-utils";

import XFormButton from "@/components/XFormButton.vue";
import * as testUtils from "@/testUtils";

it("XFormButton", () => {
  const wrapper = vueTestUtils.mount(XFormButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("button-group-member");
});
