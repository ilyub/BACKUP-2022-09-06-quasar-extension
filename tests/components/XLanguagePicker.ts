import { QList } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import XLanguagePicker from "@/components/XLanguagePicker.vue";
import XNavButton from "@/components/XNavButton.vue";
import * as testUtils from "@/testUtils";

it("XLanguagePicker", async () => {
  const changeLanguageAction = jest.fn();

  const wrapper = vueTestUtils.mount(XLanguagePicker, {
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

  const button = wrapper.findComponent(XNavButton);

  {
    expect(list()).not.toExist();
    await button.trigger("click");
    expect(menuItem0()).toExist();
    expect(menuItem1()).toExist();
  }

  {
    expect(changeLanguageAction).not.toBeCalled();
    await menuItem0().trigger("click");
    expect(changeLanguageAction).toBeCalledTimes(1);
    expect(changeLanguageAction).toBeCalledWith("en-US");
    changeLanguageAction.mockClear();
  }

  {
    expect(changeLanguageAction).not.toBeCalled();
    await menuItem1().trigger("click");
    expect(changeLanguageAction).toBeCalledTimes(1);
    expect(changeLanguageAction).toBeCalledWith("ru-RU");
    changeLanguageAction.mockClear();
  }

  function list(): vueTestUtils.VueWrapper {
    return wrapper.findComponent(QList);
  }

  function menuItem0(): vueTestUtils.DOMWrapper<Element> {
    return wrapper.findComponent(QList).find(".menu-item-0");
  }

  function menuItem1(): vueTestUtils.DOMWrapper<Element> {
    return wrapper.findComponent(QList).find(".menu-item-1");
  }
});
