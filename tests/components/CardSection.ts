import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";

test("cardSection", () => {
  const wrapper = vueTestUtils.mount(components.CardSection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
