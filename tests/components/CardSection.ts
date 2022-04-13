import * as vueTestUtils from "@vue/test-utils";
import CardSection from "@/components/CardSection.vue";
import * as testUtils from "@/testUtils";

test("cardSection", () => {
  const wrapper = vueTestUtils.mount(CardSection, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toExist();
});
