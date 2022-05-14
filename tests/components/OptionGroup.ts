import { components } from "@";
import * as testUtils from "@vue/test-utils";
import { QOptionGroup } from "quasar";
import type { extras } from "@";

test.each([undefined, 1, "a"])("OptionGroup", value => {
  const options: extras.OptionGroup.Options = [
    {
      disable: true,
      label: "Option 1",
      value: undefined
    },
    { label: "Option 2", value: 1 },
    { label: "Option 3", value: "a" }
  ];

  const wrapper = testUtils.mount(components.OptionGroup, {
    props: { options }
  });

  const main = wrapper.findComponent(QOptionGroup);

  main.vm.$emit("update:modelValue", value);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual([[value]]);
});
