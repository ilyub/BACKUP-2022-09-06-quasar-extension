import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";
import * as testUtils from "@/testUtils";

test("cardActions", () => {
  const wrapper = vueTestUtils.mount(components.CardActions, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
