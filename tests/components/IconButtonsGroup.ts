import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";
import * as testUtils from "@/testUtils";

test("IconButtonsGroup", () => {
  const wrapper = vueTestUtils.mount(components.IconButtonsGroup, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
