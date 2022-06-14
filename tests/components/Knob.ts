import { components } from "@";
import * as testUtils from "@vue/test-utils";
import { QKnob } from "quasar";

test("Knob", () => {
  const wrapper = testUtils.mount(components.Knob, {
    props: { modelValue: 50 }
  });

  const main = wrapper.findComponent(QKnob);

  expect(wrapper).toHaveEmitted("update:modelValue");
  main.vm.$emit("update:modelValue", 75);
  expect(wrapper).toHaveEmitted("update:modelValue", [75]);
});
