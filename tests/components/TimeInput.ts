import { components, testComponents } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import $ from "jquery";
import { nextTick } from "vue";

test.each([
  { expected: [undefined], value: "" },
  { expected: [30], value: "30" },
  { expected: [90], value: "1:30" }
])("emit: update:modelValue", async ({ expected, value }) => {
  const wrapper = vueTestUtils.mount(components.TimeInput, {
    global: testUtils.globalMountOptions()
  });

  const { elem } = testUtils.findFactory("time-input", wrapper);

  $(elem("input").element).val(value);
  await elem("input").trigger("input");
  expect(wrapper).toHaveEmitted("update:modelValue", expected);
});

test.each([{}, { expected: "1:30", modelValue: 90 }])(
  "main: focus, blur",
  async ({ expected, modelValue }) => {
    const wrapper = vueTestUtils.mount(components.TimeInput, {
      global: testUtils.globalMountOptions(),
      props: { modelValue }
    });

    const main = wrapper.findComponent(testComponents.NumericInput);

    {
      testUtils.setData(wrapper, "inputValue", "?");
      expect(wrapper.vm["inputValue"]).toBe("?");
      main.vm.$emit("focus", {});
      await nextTick();
      expect(wrapper.vm["inputValue"]).toStrictEqual(expected);
    }

    {
      testUtils.setData(wrapper, "inputValue", "?");
      expect(wrapper.vm["inputValue"]).toBe("?");
      main.vm.$emit("blur", {});
      await nextTick();
      expect(wrapper.vm["inputValue"]).toStrictEqual(expected);
    }
  }
);

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
