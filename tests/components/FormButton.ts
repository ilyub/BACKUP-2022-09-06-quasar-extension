import * as vueTestUtils from "@vue/test-utils";

import FormButton from "@/components/FormButton.vue";
import * as testUtils from "@/testUtils";

test("formButton", () => {
  const wrapper = vueTestUtils.mount(FormButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-button-group");
});
