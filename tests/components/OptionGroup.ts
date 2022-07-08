import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QOptionGroup } from "quasar";
import { components } from "@";
import type { extras } from "@";
import { lang } from "@skylib/facades";

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

  const wrapper = vueTestUtils.mount(components.OptionGroup, {
    global: testUtils.globalMountOptions(),
    props: { options }
  });

  const main = testUtils.findQuasarComponent(wrapper, QOptionGroup);

  main.vm.$emit("update:modelValue", value);
  expect(wrapper).toHaveEmitted("update:modelValue", [value]);
});
