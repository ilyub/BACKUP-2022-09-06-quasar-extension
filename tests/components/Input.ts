import { QInput } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import Input from "@/components/Input.vue";
import * as testUtils from "@/testUtils";

it.each([
  {
    expectedValue: undefined,
    value: ""
  },
  {
    expectedValue: "sample-value",
    value: "sample-value"
  }
])("Input", ({ expectedValue, value }) => {
  const wrapper = vueTestUtils.mount(Input, {
    global: testUtils.globalMountOptions(),
    props: {
      modelValue: undefined
    }
  });

  const input = wrapper.findComponent(QInput);

  {
    const expected = [[expectedValue]];

    expect(wrapper.emitted("update:model-value")).toBeUndefined();
    input.vm.$emit("update:model-value", value);
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }
});
