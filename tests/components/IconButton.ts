import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";

test("IconButton", () => {
  const wrapper = vueTestUtils.mount(components.IconButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-icon-button");
});
