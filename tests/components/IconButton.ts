import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";

test("IconButton", () => {
  const wrapper = vueTestUtils.mount(components.IconButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-icon-button");
});
