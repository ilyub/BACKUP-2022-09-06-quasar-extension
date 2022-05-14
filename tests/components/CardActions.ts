import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";

test("CardActions", () => {
  const wrapper = vueTestUtils.mount(components.CardActions, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-card-actions");
});
