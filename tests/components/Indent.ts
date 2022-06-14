import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";

test("Indent", () => {
  const wrapper = vueTestUtils.mount(components.Indent, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-indent");
});
