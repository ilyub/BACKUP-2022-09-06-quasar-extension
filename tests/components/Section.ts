import * as vueTestUtils from "@vue/test-utils";

import PageSection from "@/components/PageSection.vue";
import * as testUtils from "@/testUtils";

it("PageSection", () => {
  const wrapper = vueTestUtils.mount(PageSection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("x-section");
});
