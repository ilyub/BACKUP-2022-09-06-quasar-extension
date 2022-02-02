import * as vueTestUtils from "@vue/test-utils";

import NavButton from "@/components/NavButton.vue";
import * as testUtils from "@/testUtils";

it("NavButton", () => {
  const wrapper = vueTestUtils.mount(NavButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
