import { QSelect } from "quasar";
import * as testUtils from "@vue/test-utils";

import type { SelectOptions } from "@/components/Select.extras";
import Select from "@/components/Select.vue";

test.each([
  { disable: true, label: "Option 1", value: undefined },
  { label: "Option 2", value: 1 },
  { label: "Option 3", value: "a" }
])("select", option => {
  // eslint-disable-next-line no-warning-comments
  // fixme: Use typedef
  const options: SelectOptions = [
    { disable: true, label: "Option 1", value: undefined },
    { label: "Option 2", value: 1 },
    { label: "Option 3", value: "a" }
  ];

  const wrapper = testUtils.mount(Select, {
    props: {
      modelValue: undefined,
      options
    }
  });

  const expected = [[option.value]];

  wrapper.findComponent(QSelect).vm.$emit("update:modelValue", option);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
});

test.each([
  {
    expected: "Select"
  },
  {
    expected: "Custom label",
    initialLabel: "Custom label"
  }
])("initial label", ({ expected, initialLabel }) => {
  // eslint-disable-next-line no-warning-comments
  // fixme: Use typedef
  const options: SelectOptions = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: "a" }
  ];

  const wrapper = testUtils.mount(Select, { props: { initialLabel, options } });

  expect(wrapper.find(".q-field__native").text()).toStrictEqual(expected);
});
