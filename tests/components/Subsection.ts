import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";

test("subsection", () => {
  const wrapper = vueTestUtils.mount(components.Subsection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-subsection");
});
