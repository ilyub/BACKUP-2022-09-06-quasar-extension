import { components } from "@";
import * as testUtils from "@vue/test-utils";
import { QToggle } from "quasar";

test.each([true, false])("main", value => {
  const wrapper = testUtils.mount(components.Toggle);

  const main = wrapper.findComponent(QToggle);

  expect(wrapper).toHaveEmitted("update:modelValue");
  main.vm.$emit("update:modelValue", value);
  expect(wrapper).toHaveEmitted("update:modelValue", [value]);
});
