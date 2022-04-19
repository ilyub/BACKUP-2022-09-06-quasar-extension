import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";
import * as testUtils from "@/testUtils";

test("cardSection", () => {
  const wrapper = vueTestUtils.mount(components.CardSection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
