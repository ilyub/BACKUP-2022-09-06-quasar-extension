import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";

test("FormSection", () => {
  const wrapper = vueTestUtils.mount(components.FormSection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-form-section");
});
