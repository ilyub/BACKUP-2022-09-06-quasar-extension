import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";

test("IconButtonsGroup", () => {
  const wrapper = vueTestUtils.mount(components.IconButtonsGroup, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-icon-buttons-group");
});
