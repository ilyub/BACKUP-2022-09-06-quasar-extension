import { components } from "@";
import * as testUtils from "@vue/test-utils";
import { QSelect } from "quasar";

test.each([
  { expected: "Select" },
  { expected: "Custom label", initialLabel: "Custom label" }
])("initial label", ({ expected, initialLabel }) => {
  // eslint-disable-next-line no-warning-comments
  // fixme: Use typedef
  const options: components.SelectOptions = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: "a" }
  ];

  const wrapper = testUtils.mount(components.Select, {
    props: { initialLabel, options }
  });

  expect(wrapper.find(".q-field__native").text()).toStrictEqual(expected);
});

test.each([
  {
    disable: true,
    label: "Option 1",
    value: undefined
  },
  { label: "Option 2", value: 1 },
  { label: "Option 3", value: "a" }
])("select", option => {
  // eslint-disable-next-line no-warning-comments
  // fixme: Use typedef
  const options: components.SelectOptions = [
    {
      disable: true,
      label: "Option 1",
      value: undefined
    },
    { label: "Option 2", value: 1 },
    { label: "Option 3", value: "a" }
  ];

  const wrapper = testUtils.mount(components.Select, {
    props: { modelValue: undefined, options }
  });

  const expected = [[option.value]];

  wrapper.findComponent(QSelect).vm.$emit("update:modelValue", option);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
});
