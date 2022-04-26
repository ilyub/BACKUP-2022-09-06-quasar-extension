import { components } from "@";
import * as testUtils from "@vue/test-utils";
import { QExpansionItem } from "quasar";

test("knob", () => {
  const wrapper = testUtils.mount(components.ExpansionItem);

  const expansionItem = wrapper.findComponent(QExpansionItem);

  expect(expansionItem).toExist();
});
