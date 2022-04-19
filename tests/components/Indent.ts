import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";
import * as testUtils from "@/testUtils";

test("indent", () => {
  const wrapper = vueTestUtils.mount(components.Indent, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-indent");
});
