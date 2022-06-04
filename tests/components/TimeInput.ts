import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import $ from "jquery";

test.each([
  { expected: [[undefined]], value: "" },
  { expected: [[30]], value: "30" },
  { expected: [[90]], value: "1:30" }
])("emit: update:modelValue", async ({ expected, value }) => {
  const wrapper = vueTestUtils.mount(components.TimeInput, {
    global: testUtils.globalMountOptions()
  });

  const { elem } = testUtils.findFactory("time-input", wrapper);

  elem("input").element.setAttribute("value", value);
  await elem("input").trigger("input");
  expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
});

test.each([
  { expected: "" },
  { expected: "0:30", modelValue: 30 },
  { expected: "1:30", modelValue: 90 }
])("prop: modelValue", ({ expected, modelValue }) => {
  const wrapper = vueTestUtils.mount(components.TimeInput, {
    global: testUtils.globalMountOptions(),
    props: { modelValue }
  });

  const { elem } = testUtils.findFactory("time-input", wrapper);

  expect($(elem("input").element).val()).toStrictEqual(expected);
});
