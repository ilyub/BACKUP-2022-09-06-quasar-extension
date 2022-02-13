import * as vueTestUtils from "@vue/test-utils";

import Section from "@/components/Section.vue";
import * as testUtils from "@/testUtils";

it("Section", () => {
  const wrapper = vueTestUtils.mount(Section, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-section");
});
