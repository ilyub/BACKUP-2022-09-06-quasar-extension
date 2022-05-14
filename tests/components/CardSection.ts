import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";

test("CardSection", () => {
  const wrapper = vueTestUtils.mount(components.CardSection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-card-section");
});
