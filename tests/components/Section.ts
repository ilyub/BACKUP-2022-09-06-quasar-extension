import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";

test("Section", () => {
  const wrapper = vueTestUtils.mount(components.Section, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-section");
});
