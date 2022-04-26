import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";

test("section", () => {
  const wrapper = vueTestUtils.mount(components.Section, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-section");
});
