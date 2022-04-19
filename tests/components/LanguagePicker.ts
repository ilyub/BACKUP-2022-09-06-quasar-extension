import * as vueTestUtils from "@vue/test-utils";
import { QList } from "quasar";
import { components } from "@";
import * as testUtils from "@/testUtils";

test.each([
  { expected: "en-US", menuItemIndex: 0 },
  { expected: "ru-RU", menuItemIndex: 1 }
])("languagePicker", async ({ expected, menuItemIndex }) => {
  const changeLanguageAction = jest.fn();

  const wrapper = vueTestUtils.mount(components.LanguagePicker, {
    global: testUtils.globalMountOptions({
      languagePickerSettings: {
        changeLanguageAction,
        items: [
          {
            caption: "English (USA)",
            flag: "us-flag",
            lang: "en-US"
          },
          {
            caption: "Russian",
            flag: "ru-flag",
            lang: "ru-RU"
          }
        ]
      }
    }),
    props: { language: "en-US" }
  });

  const button = wrapper.findComponent(components.IconButton);

  {
    expect(list()).not.toExist();
    await button.trigger("click");
    expect(list()).toExist();
  }

  {
    expect(changeLanguageAction).not.toHaveBeenCalled();
    await menuItem().trigger("click");
    expect(changeLanguageAction).toHaveBeenCalledTimes(1);
    expect(changeLanguageAction).toHaveBeenCalledWith(expected);
    changeLanguageAction.mockClear();
  }

  function list(): vueTestUtils.VueWrapper {
    return wrapper.findComponent(QList);
  }

  function menuItem(): vueTestUtils.DOMWrapper<Element> {
    return wrapper.findComponent(QList).find(`.menu-item-${menuItemIndex}`);
  }
});
