import * as vueTestUtils from "@vue/test-utils";

import PageSection from "@/components/PageSection.vue";
import * as testUtils from "@/testUtils";

test("pageSection", () => {
  const wrapper = vueTestUtils.mount(PageSection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-page-section");
});
