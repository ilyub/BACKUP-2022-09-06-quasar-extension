import * as testUtils from "@vue/test-utils";
import { QOptionGroup } from "quasar";
import { components } from "@";

test.each([undefined, 1, "a"])("optionGroup", value => {
  const options: components.OptionGroupOptions = [
    {
      disable: true,
      label: "Option 1",
      value: undefined
    },
    { label: "Option 2", value: 1 },
    { label: "Option 3", value: "a" }
  ];

  const wrapper = testUtils.mount(components.OptionGroup, {
    props: { modelValue: undefined, options }
  });

  const expected = [[value]];

  wrapper.findComponent(QOptionGroup).vm.$emit("update:modelValue", value);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
});
