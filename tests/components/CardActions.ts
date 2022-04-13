import * as vueTestUtils from "@vue/test-utils";
import CardActions from "@/components/CardActions.vue";
import * as testUtils from "@/testUtils";

test("cardActions", () => {
  const wrapper = vueTestUtils.mount(CardActions, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
