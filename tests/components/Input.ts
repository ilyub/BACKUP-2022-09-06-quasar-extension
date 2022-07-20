/* eslint jest/max-expects: [warn, { max: 2 }] -- Ok */

import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import $ from "jquery";
import { components } from "@";

test.each([
  { expected: [undefined], value: "" },
  { expected: ["sample-value"], value: "sample-value" }
])("input", async ({ expected, value }) => {
  const wrapper = vueTestUtils.mount(components.Input, {
    global: testUtils.globalMountOptions()
  });

  const { elem } = testUtils.findFactory("input", wrapper);

  expect(wrapper).toHaveEmitted("update:modelValue");
  $(elem("input").element).val(value);
  await elem("input").trigger("input");
  expect(wrapper).toHaveEmitted("update:modelValue", expected);
});
