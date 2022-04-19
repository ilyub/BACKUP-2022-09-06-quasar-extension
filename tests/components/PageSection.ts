import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";
import * as testUtils from "@/testUtils";

test("pageSection", () => {
  const wrapper = vueTestUtils.mount(components.PageSection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-page-section");
});
