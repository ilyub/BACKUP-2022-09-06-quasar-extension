import * as testUtils from "@vue/test-utils";
import { QKnob } from "quasar";
import { components } from "@";

test("knob", () => {
  const wrapper = testUtils.mount(components.Knob, {
    props: { modelValue: 50 }
  });

  const knob = wrapper.findComponent(QKnob);

  expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  knob.vm.$emit("update:modelValue", 75);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual([[75]]);
});
