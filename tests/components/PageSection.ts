import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";

test("PageSection", () => {
  const wrapper = vueTestUtils.mount(components.PageSection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-page-section");
});
