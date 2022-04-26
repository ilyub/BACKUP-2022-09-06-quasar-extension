import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";

test("indent", () => {
  const wrapper = vueTestUtils.mount(components.Indent, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-indent");
});
