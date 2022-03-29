import { QOptionGroup } from "quasar";
import * as testUtils from "@vue/test-utils";

import type { OptionGroupOptions } from "@/components/OptionGroup.extras";
import OptionGroup from "@/components/OptionGroup.vue";

test.each([undefined, 1, "a"])("optionGroup", value => {
  const options: OptionGroupOptions = [
    {
      disable: true,
      label: "Option 1",
      value: undefined
    },
    { label: "Option 2", value: 1 },
    { label: "Option 3", value: "a" }
  ];

  const wrapper = testUtils.mount(OptionGroup, {
    props: { modelValue: undefined, options }
  });

  const expected = [[value]];

  wrapper.findComponent(QOptionGroup).vm.$emit("update:modelValue", value);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
});
