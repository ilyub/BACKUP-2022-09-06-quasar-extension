import * as vueTestUtils from "@vue/test-utils";

import Subsection from "@/components/Subsection.vue";
import * as testUtils from "@/testUtils";

it("Subsection", () => {
  const wrapper = vueTestUtils.mount(Subsection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-subsection");
});
