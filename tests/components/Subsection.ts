import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";

test("Subsection", () => {
  const wrapper = vueTestUtils.mount(components.Subsection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-subsection");
});
