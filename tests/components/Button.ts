import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";

test("button", () => {
  const wrapper = vueTestUtils.mount(components.Button, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-button");
});
