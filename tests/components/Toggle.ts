import { QToggle } from "quasar";
import * as testUtils from "@vue/test-utils";

import Toggle from "@/components/Toggle.vue";

test("toggle", () => {
  const wrapper = testUtils.mount(Toggle, {
    props: {
      modelValue: false
    }
  });

  const toggle = wrapper.findComponent(QToggle);

  expect(wrapper.emitted("update:model-value")).toBeUndefined();
  toggle.vm.$emit("update:model-value", true);
  expect(wrapper.emitted("update:model-value")).toStrictEqual([[true]]);
});
