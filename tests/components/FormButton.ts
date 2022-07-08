import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";

test("FormButton", () => {
  const wrapper = vueTestUtils.mount(components.FormButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-form-button");
});
