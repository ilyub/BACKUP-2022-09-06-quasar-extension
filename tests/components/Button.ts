import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";

test("Button", () => {
  const wrapper = vueTestUtils.mount(components.Button, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-button");
});
