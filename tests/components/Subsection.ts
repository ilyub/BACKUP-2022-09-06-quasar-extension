import * as vueTestUtils from "@vue/test-utils";

import Subsection from "@/components/Subsection.vue";
import * as testUtils from "@/testUtils";

test("subsection", () => {
  const wrapper = vueTestUtils.mount(Subsection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-subsection");
});
