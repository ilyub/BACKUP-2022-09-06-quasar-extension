import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";

test("ButtonsGroup", () => {
  const wrapper = vueTestUtils.mount(components.ButtonsGroup, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
