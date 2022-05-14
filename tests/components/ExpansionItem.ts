import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";

test("knob", () => {
  const wrapper = vueTestUtils.mount(components.ExpansionItem, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-expansion-item");
});
