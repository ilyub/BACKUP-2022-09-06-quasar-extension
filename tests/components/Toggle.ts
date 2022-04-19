import * as testUtils from "@vue/test-utils";
import { QToggle } from "quasar";
import { components } from "@";

test("toggle", () => {
  const wrapper = testUtils.mount(components.Toggle, {
    props: { modelValue: false }
  });

  const toggle = wrapper.findComponent(QToggle);

  expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  toggle.vm.$emit("update:modelValue", true);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual([[true]]);
});
