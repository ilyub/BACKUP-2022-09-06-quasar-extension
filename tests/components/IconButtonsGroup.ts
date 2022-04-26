import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";

test("IconButtonsGroup", () => {
  const wrapper = vueTestUtils.mount(components.IconButtonsGroup, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
