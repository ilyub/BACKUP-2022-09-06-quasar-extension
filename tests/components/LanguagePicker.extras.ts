import { extras } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";

test("injectSettings", () => {
  const callback = jest.fn();

  const wrapper = vueTestUtils.mount({
    global: testUtils.globalMountOptions(),
    setup: (): void => {
      callback(extras.LanguagePicker.injectSettings().value);
    },
    template: "<div></div>"
  });

  const expected = [extras.LanguagePicker.defaultSettings.value] as const;

  expect(wrapper).toBeDefined();
  expect(callback).mockCallsToBe(expected);
});
