import { QList } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import IconButton from "@/components/IconButton.vue";
import LanguagePicker from "@/components/LanguagePicker.vue";
import * as testUtils from "@/testUtils";

it.each([
  {
    expected: "en-US",
    menuItemIndex: 0
  },
  {
    expected: "ru-RU",
    menuItemIndex: 1
  }
])("LanguagePicker", async ({ expected, menuItemIndex }) => {
  const changeLanguageAction = jest.fn();

  const wrapper = vueTestUtils.mount(LanguagePicker, {
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
    props: {
      language: "en-US"
    }
  });

  const button = wrapper.findComponent(IconButton);

  {
    expect(list()).not.toExist();
    await button.trigger("click");
    expect(list()).toExist();
  }

  {
    expect(changeLanguageAction).not.toBeCalled();
    await menuItem().trigger("click");
    expect(changeLanguageAction).toBeCalledTimes(1);
    expect(changeLanguageAction).toBeCalledWith(expected);
    changeLanguageAction.mockClear();
  }

  function list(): vueTestUtils.VueWrapper {
    return wrapper.findComponent(QList);
  }

  function menuItem(): vueTestUtils.DOMWrapper<Element> {
    return wrapper.findComponent(QList).find(`.menu-item-${menuItemIndex}`);
  }
});
