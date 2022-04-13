import * as testUtils from "@vue/test-utils";
import { QExpansionItem } from "quasar";
import ExpansionItem from "@/components/ExpansionItem.vue";

test("knob", () => {
  const wrapper = testUtils.mount(ExpansionItem);

  const expansionItem = wrapper.findComponent(QExpansionItem);

  expect(expansionItem).toExist();
});
