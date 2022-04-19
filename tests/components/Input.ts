import * as vueTestUtils from "@vue/test-utils";
import { QInput } from "quasar";
import { components } from "@";
import * as testUtils from "@/testUtils";

test.each([
  { expectedValue: undefined, value: "" },
  { expectedValue: "sample-value", value: "sample-value" }
])("input", ({ expectedValue, value }) => {
  const wrapper = vueTestUtils.mount(components.Input, {
    global: testUtils.globalMountOptions(),
    props: { modelValue: undefined }
  });

  const input = wrapper.findComponent(QInput);

  {
    const expected = [[expectedValue]];

    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    input.vm.$emit("update:modelValue", value);
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
  }
});
