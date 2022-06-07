import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";

test.each([
  { expected: [[undefined]], value: "" },
  { expected: [["sample-value"]], value: "sample-value" }
])("input", ({ expected, value }) => {
  const wrapper = vueTestUtils.mount(components.Input, {
    global: testUtils.globalMountOptions()
  });

  const main = wrapper.findComponent(components.Field);

  expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  main.vm.$emit("update:modelValue", value);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
});
