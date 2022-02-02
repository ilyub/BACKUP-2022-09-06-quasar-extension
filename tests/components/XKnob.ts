import { QKnob } from "quasar";
import * as testUtils from "@vue/test-utils";

import XKnob from "@/components/XKnob.vue";

it("XKnob", () => {
  const wrapper = testUtils.mount(XKnob, {
    props: {
      modelValue: 50
    }
  });

  const knob = wrapper.findComponent(QKnob);

  expect(wrapper.emitted("update:model-value")).toBeUndefined();
  knob.vm.$emit("update:model-value", 75);
  expect(wrapper.emitted("update:model-value")).toStrictEqual([[75]]);
});
