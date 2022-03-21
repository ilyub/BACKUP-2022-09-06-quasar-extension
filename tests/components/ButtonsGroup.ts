import * as vueTestUtils from "@vue/test-utils";

import ButtonsGroup from "@/components/ButtonsGroup.vue";
import * as testUtils from "@/testUtils";

test("ButtonsGroup", () => {
  const wrapper = vueTestUtils.mount(ButtonsGroup, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
