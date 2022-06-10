import { components } from "@";
import { lang } from "@skylib/facades";
import * as testUtils from "@vue/test-utils";
import { QOptionGroup } from "quasar";
import type { extras } from "@";

test.each([undefined, 1, "a"])("OptionGroup", value => {
  const options: extras.OptionGroup.Options = [
    {
      disable: true,
      label: lang.plain("Option 1"),
      value: undefined
    },
    { label: lang.plain("Option 2"), value: 1 },
    { label: lang.plain("Option 3"), value: "a" }
  ];

  const wrapper = testUtils.mount(components.OptionGroup, {
    props: { options }
  });

  const main = wrapper.findComponent(QOptionGroup);

  main.vm.$emit("update:modelValue", value);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual([[value]]);
});
