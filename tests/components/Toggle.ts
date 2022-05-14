import { components } from "@";
import * as testUtils from "@vue/test-utils";
import { QToggle } from "quasar";

test.each([true, false])("main", value => {
  const wrapper = testUtils.mount(components.Toggle);

  const main = wrapper.findComponent(QToggle);

  expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  main.vm.$emit("update:modelValue", value);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual([[value]]);
});
