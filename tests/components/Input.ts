import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import $ from "jquery";

test.each([
  { expected: [[undefined]], value: "" },
  { expected: [["sample-value"]], value: "sample-value" }
])("input", async ({ expected, value }) => {
  const wrapper = vueTestUtils.mount(components.Input, {
    global: testUtils.globalMountOptions()
  });

  const { elem } = testUtils.findFactory("input", wrapper);

  expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  $(elem("input").element).val(value);
  await elem("input").trigger("input");
  expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
});
