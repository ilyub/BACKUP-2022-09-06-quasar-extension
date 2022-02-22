import { QSelect } from "quasar";
import * as testUtils from "@vue/test-utils";

import type { SelectOptions } from "@/components/Select.extras";
import Select from "@/components/Select.vue";

test.each([
  { disable: true, label: "Option 1", value: undefined },
  { label: "Option 2", value: 1 },
  { label: "Option 3", value: "a" }
])("select", option => {
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

  wrapper.findComponent(QSelect).vm.$emit("update:model-value", option);
  expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
});
