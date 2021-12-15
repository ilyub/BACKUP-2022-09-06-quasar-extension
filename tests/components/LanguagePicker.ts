import { QList } from "quasar";
import type { ComponentPublicInstance } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import LanguagePicker from "@/components/LanguagePicker.vue";
import NavButton from "@/components/NavButton.vue";
import * as testUtils from "@/testUtils";

it("LanguagePicker", async () => {
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

  const button = wrapper.findComponent(NavButton);

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

  function list(): vueTestUtils.VueWrapper<ComponentPublicInstance> {
    return wrapper.findComponent(QList);
  }

  function menuItem0(): vueTestUtils.DOMWrapper<Element> {
    return wrapper.findComponent(QList).find(".menu-item-0");
  }

  function menuItem1(): vueTestUtils.DOMWrapper<Element> {
    return wrapper.findComponent(QList).find(".menu-item-1");
  }
});
