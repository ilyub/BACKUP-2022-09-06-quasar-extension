import { components } from "@";
import * as testUtils from "@vue/test-utils";
import { QKnob } from "quasar";

test("knob", () => {
  const wrapper = testUtils.mount(components.Knob, {
    props: { modelValue: 50 }
  });

  const main = wrapper.findComponent(QKnob);

  expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  main.vm.$emit("update:modelValue", 75);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual([[75]]);
});
