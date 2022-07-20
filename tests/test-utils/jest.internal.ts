/* eslint jest/max-expects: [warn, { max: 2 }] -- Ok */

import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { matchers } from "@/test-utils/jest.internal";

test.each([
  { expected: "<div>sample-text</div>", pass: true },
  { expected: "<div>sample-text-2</div>", pass: false }
])("htmlToEqual", ({ expected, pass }) => {
  const wrapper = vueTestUtils.mount({
    global: testUtils.globalMountOptions(),
    template: "<div>sample-text</div>"
  });

  const result = matchers.htmlToEqual(wrapper, expected);

  expect(result.pass).toBe(pass);
  expect(result.message()).toStartWith("Unexpected html:\n");
});

test.each([
  { expected: "sample-text", pass: true },
  { expected: "sample-text-2", pass: false }
])("textToEqual", ({ expected, pass }) => {
  const wrapper = vueTestUtils.mount({
    global: testUtils.globalMountOptions(),
    template: "<div>sample-text</div>"
  });

  const result = matchers.textToEqual(wrapper, expected);

  expect(result.pass).toBe(pass);
  expect(result.message()).toStartWith("Unexpected text:\n");
});

test.each([
  {
    message: "Expected Vue wrapper not to be visible",
    pass: true,
    selector: ".visible"
  },
  {
    message: "Expected Vue wrapper to be visible",
    pass: false,
    selector: ".invisible"
  }
])("toBeVisible", ({ message, pass, selector }) => {
  const wrapper = vueTestUtils.mount({
    global: testUtils.globalMountOptions(),
    template: `
      <div>
        <div class="visible"></div>
        <div v-show="false" class="invisible"></div>
      </div>
    `
  });

  const result = matchers.toBeVisible(wrapper.find(selector));

  expect(result.pass).toBe(pass);
  expect(result.message()).toBe(message);
});
