import { components } from "@";
import { lang } from "@skylib/facades";
import * as testUtils from "@vue/test-utils";
import { QSelect } from "quasar";
import type { extras } from "@";

test.each([undefined, 1, "a"])("emit: update:modelValue", value => {
  const options: extras.Select.Options = [
    {
      disable: true,
      label: lang.plain("Option 1"),
      value: undefined
    },
    { label: lang.plain("Option 2"), value: 1 },
    { label: lang.plain("Option 3"), value: "a" }
  ];

  const wrapper = testUtils.mount(components.Select, { props: { options } });

  const main = wrapper.findComponent(QSelect);

  main.vm.$emit("update:modelValue", value);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual([[value]]);
});

test.each([
  { expected: "Select" },
  { expected: "Select color", initialLabel: lang.keys.SelectColor }
])("prop: initialLabel", ({ expected, initialLabel }) => {
  const wrapper = testUtils.mount(components.Select, {
    props: {
      initialLabel,
      options: [
        { label: lang.plain("Option 1"), value: 1 },
        { label: lang.plain("Option 2"), value: "a" }
      ]
    }
  });

  expect(wrapper.find(".q-field__native").text()).toStrictEqual(expected);
});
