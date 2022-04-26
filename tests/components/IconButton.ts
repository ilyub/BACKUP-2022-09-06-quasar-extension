import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";

test("iconButton", () => {
  const wrapper = vueTestUtils.mount(components.IconButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-icon-button");
});
