import * as testUtils from "@vue/test-utils";
import { QExpansionItem } from "quasar";
import { components } from "@";

test("knob", () => {
  const wrapper = testUtils.mount(components.ExpansionItem);

  const expansionItem = wrapper.findComponent(QExpansionItem);

  expect(expansionItem).toExist();
});
