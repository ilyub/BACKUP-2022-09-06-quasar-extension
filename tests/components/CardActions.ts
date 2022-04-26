import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";

test("cardActions", () => {
  const wrapper = vueTestUtils.mount(components.CardActions, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
