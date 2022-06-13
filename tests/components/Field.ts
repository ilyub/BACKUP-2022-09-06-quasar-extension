import { components } from "@";
import * as testUtils from "@/test-utils";
import { cast } from "@skylib/functions";
import * as vueTestUtils from "@vue/test-utils";
import { QField } from "quasar";

test.each([
  { expected: [[undefined]], value: "" },
  { expected: [["sample-value"]], value: "sample-value" }
])("field", ({ expected, value }) => {
  const wrapper = vueTestUtils.mount(components.Field, {
    global: testUtils.globalMountOptions(),
    props: { format: cast.stringU, modelValue: "" }
  });

  const main = wrapper.findComponent(QField);

  expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  main.vm.$emit("update:modelValue", value);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
});
