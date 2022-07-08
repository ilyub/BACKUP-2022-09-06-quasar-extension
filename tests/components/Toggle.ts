import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QToggle } from "quasar";
import { components } from "@";

test.each([true, false])("main", value => {
  const wrapper = vueTestUtils.mount(components.Toggle, {
    global: testUtils.globalMountOptions()
  });

  const main = testUtils.findQuasarComponent(wrapper, QToggle);

  expect(wrapper).toHaveEmitted("update:modelValue");
  main.vm.$emit("update:modelValue", value);
  expect(wrapper).toHaveEmitted("update:modelValue", [value]);
});
