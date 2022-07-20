/* eslint jest/max-expects: [warn, { max: 2 }] -- Ok */

import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QKnob } from "quasar";
import { components } from "@";

test("Knob", () => {
  const wrapper = vueTestUtils.mount(components.Knob, {
    global: testUtils.globalMountOptions(),
    props: { modelValue: 50 }
  });

  const main = testUtils.findQuasarComponent(wrapper, QKnob);

  expect(wrapper).toHaveEmitted("update:modelValue");
  main.vm.$emit("update:modelValue", 75);
  expect(wrapper).toHaveEmitted("update:modelValue", [75]);
});
