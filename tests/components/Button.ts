import * as vueTestUtils from "@vue/test-utils";

import Button from "@/components/Button.vue";
import * as testUtils from "@/testUtils";

it("Button", () => {
  const wrapper = vueTestUtils.mount(Button, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
