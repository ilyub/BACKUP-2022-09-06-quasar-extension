import { components } from "@";
import * as testUtils from "@vue/test-utils";
import { QSelect } from "quasar";
import type { extras } from "@";

test.each([undefined, 1, "a"])("emit: update:modelValue", value => {
  const options: extras.Select.Options = [
    {
      disable: true,
      label: "Option 1",
      value: undefined
    },
    { label: "Option 2", value: 1 },
    { label: "Option 3", value: "a" }
  ];

  const wrapper = testUtils.mount(components.Select, { props: { options } });

  const main = wrapper.findComponent(QSelect);

  main.vm.$emit("update:modelValue", value);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual([[value]]);
});

test.each([
  { expected: "Select" },
  { expected: "Sample label", initialLabel: "Sample label" }
])("prop: initialLabel", ({ expected, initialLabel }) => {
  const wrapper = testUtils.mount(components.Select, {
    props: {
      initialLabel,
      options: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" }
      ]
    }
  });

  expect(wrapper.find(".q-field__native").text()).toStrictEqual(expected);
});
