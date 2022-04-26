import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";

test("pageSection", () => {
  const wrapper = vueTestUtils.mount(components.PageSection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-page-section");
});
