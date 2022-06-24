import { components, testComponents } from "@";
import * as testUtils from "@/test-utils";
import { lang } from "@skylib/facades";
import * as vueTestUtils from "@vue/test-utils";

test.each([
  { expected: ["en-US"], index: 0 },
  { expected: ["en-GB"], index: 1 },
  { expected: ["ru-RU"], index: 2 }
])("LanguagePicker", async ({ expected, index }) => {
  const changeLanguageAction = jest.fn();

  const wrapper = vueTestUtils.mount(components.LanguagePicker, {
    global: testUtils.globalMountOptions({
      languagePickerSettings: {
        changeLanguageAction,
        options: [
          {
            caption: lang.keys.EnglishUSA,
            flag: "us-flag",
            lang: "en-US"
          },
          {
            caption: lang.keys.EnglishUK,
            flag: "gb-flag",
            lang: "en-GB"
          },
          {
            caption: lang.keys.Russian,
            flag: "ru-flag",
            lang: "ru-RU"
          }
        ]
      }
    }),
    props: { language: "en-US" }
  });

  const main = wrapper.findComponent(testComponents.IconButton);

  const { comp } = testUtils.findFactory("language-picker", wrapper);

  await main.trigger("click");
  await comp("menu-item", index).trigger("click");
  expect(changeLanguageAction).mockCallsToBe(expected);
});
