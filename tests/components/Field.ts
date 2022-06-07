import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QField } from "quasar";

test.each([
  { expected: [[""]], value: "" },
  { expected: [["sample-value"]], value: "sample-value" }
])("field", ({ expected, value }) => {
  const wrapper = vueTestUtils.mount(components.Field, {
    global: testUtils.globalMountOptions()
  });

  const main = wrapper.findComponent(QField);

  expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  main.vm.$emit("update:modelValue", value);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
});
