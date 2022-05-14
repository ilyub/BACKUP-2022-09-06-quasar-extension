import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";

test("MenuItem", () => {
  const wrapper = vueTestUtils.mount(components.MenuItem, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-menu-item");
});
