import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import $ from "jquery";

test.each([
  { expected: [] },
  { expected: [[undefined]], modelValue: 1 },
  { expected: [[1]], modelValue: 2 }
])("emit: update:modelValue (down)", async ({ expected, modelValue }) => {
  const wrapper = vueTestUtils.mount(components.NumericInput, {
    global: testUtils.globalMountOptions(),
    props: {
      max: 2,
      min: 1,
      modelValue
    }
  });

  const { comp } = testUtils.findFactory("numeric-input", wrapper);

  await comp("down").trigger("click");
  expect(wrapper).toHaveEmitted("update:modelValue", ...expected);
});

test.each([
  { expected: [undefined], value: "" },
  { expected: [30], value: "30" },
  { expected: [90], value: "90" }
])("emit: update:modelValue (input)", async ({ expected, value }) => {
  const wrapper = vueTestUtils.mount(components.NumericInput, {
    global: testUtils.globalMountOptions()
  });

  const { elem } = testUtils.findFactory("numeric-input", wrapper);

  $(elem("input").element).val(value);
  await elem("input").trigger("input");
  expect(wrapper).toHaveEmitted("update:modelValue", expected);
});

test.each([
  { expected: [[1]] },
  { expected: [[2]], modelValue: 1 },
  { expected: [], modelValue: 2 }
])("emit: update:modelValue, up", async ({ expected, modelValue }) => {
  const wrapper = vueTestUtils.mount(components.NumericInput, {
    global: testUtils.globalMountOptions(),
    props: {
      max: 2,
      min: 1,
      modelValue
    }
  });

  const { comp } = testUtils.findFactory("numeric-input", wrapper);

  await comp("up").trigger("click");
  expect(wrapper).toHaveEmitted("update:modelValue", ...expected);
});

test.each([
  { expected: "" },
  { expected: "30", modelValue: 30 },
  { expected: "90", modelValue: 90 }
])("prop: modelValue", ({ expected, modelValue }) => {
  const wrapper = vueTestUtils.mount(components.NumericInput, {
    global: testUtils.globalMountOptions(),
    props: { modelValue }
  });

  const { elem } = testUtils.findFactory("numeric-input", wrapper);

  expect($(elem("input").element).val()).toBe(expected);
});

test.each([
  { expected: [], required: true },
  { expected: [[undefined]], required: false }
])("prop: required", async ({ expected, required }) => {
  const wrapper = vueTestUtils.mount(components.NumericInput, {
    global: testUtils.globalMountOptions(),
    props: { modelValue: 0, required }
  });

  const { comp } = testUtils.findFactory("numeric-input", wrapper);

  await comp("down").trigger("click");
  expect(wrapper).toHaveEmitted("update:modelValue", ...expected);
});
