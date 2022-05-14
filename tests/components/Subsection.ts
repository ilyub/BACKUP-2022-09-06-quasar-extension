import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";

test("Subsection", () => {
  const wrapper = vueTestUtils.mount(components.Subsection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-subsection");
});
