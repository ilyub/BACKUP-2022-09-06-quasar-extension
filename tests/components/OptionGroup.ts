import { QOptionGroup } from "quasar";
import * as testUtils from "@vue/test-utils";

import type { OptionGroupOptions } from "@/components/OptionGroup.extras";
import OptionGroup from "@/components/OptionGroup.vue";

it.each([undefined, 1, "a"])("OptionGroup", value => {
  const options: OptionGroupOptions = [
    { disable: true, label: "Option 1", value: undefined },
    { label: "Option 2", value: 1 },
    { label: "Option 3", value: "a" }
  ];

  const wrapper = testUtils.mount(OptionGroup, {
    props: {
      modelValue: undefined,
      options
    }
  });

  const expected = [[value]];

  wrapper.findComponent(QOptionGroup).vm.$emit("update:model-value", value);
  expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
});
