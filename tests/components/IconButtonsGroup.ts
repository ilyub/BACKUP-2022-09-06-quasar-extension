import * as vueTestUtils from "@vue/test-utils";

import IconButtonsGroup from "@/components/IconButtonsGroup.vue";
import * as testUtils from "@/testUtils";

test("IconButtonsGroup", () => {
  const wrapper = vueTestUtils.mount(IconButtonsGroup, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
