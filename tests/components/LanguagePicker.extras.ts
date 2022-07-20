import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { extras } from "@";

test("injectSettings", () => {
  const callback = jest.fn();

  vueTestUtils.mount({
    global: testUtils.globalMountOptions(),
    setup: (): void => {
      callback(extras.LanguagePicker.injectSettings().value);
    },
    template: "<div></div>"
  });

  const expected = [extras.LanguagePicker.defaultSettings.value] as const;

  expect(callback).mockCallsToBe(expected);
});
