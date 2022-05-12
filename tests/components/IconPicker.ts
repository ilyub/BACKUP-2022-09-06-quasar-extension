/* eslint-disable jest/no-conditional-expect */

/* eslint-disable jest/no-conditional-in-test */

import { components } from "@";
import * as testUtils from "@/testUtils";
import * as mdi from "@mdi/js-dynamic";
import { handlePromise } from "@skylib/facades";
import { implementations } from "@skylib/framework";
import { a, is, o } from "@skylib/functions";
import * as functionsTestUtils from "@skylib/functions/dist/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QBtn, QCard, QDialog } from "quasar";
import { nextTick } from "vue";
import type { ComponentPublicInstance } from "vue";

beforeAll(functionsTestUtils.installFakeTimer);

beforeEach(() => {
  implementations.testDelay.configurableTestDelay.configure({
    enabled: true,
    timeout: 1000
  });
});

// eslint-disable-next-line jest/prefer-expect-assertions
test.each(
  [true, false, undefined].map((value, index) => {
    return { first: index === 0, iconTooltipsSetting: value };
  })
)("iconPicker", async ({ first, iconTooltipsSetting }) => {
  await functionsTestUtils.run(async () => {
    const iconTooltips = iconTooltipsSetting ?? false;

    const wrapper = vueTestUtils.mount(components.IconPicker, {
      global: testUtils.globalMountOptions(
        is.not.empty(iconTooltipsSetting)
          ? { iconPickerSettings: { iconTooltips } }
          : {}
      ),
      props: { placeholder: "" }
    });

    const button = wrapper.findComponent(components.IconButton);

    const dialog = wrapper.findComponent(QDialog);

    const icon = mdi[a.first(o.keys(mdi).filter(id => id.startsWith("mdi")))];

    {
      expect(dialog.props("modelValue")).toBeFalse();
      await button.trigger("click");
      expect(dialog.props("modelValue")).toBeTrue();
    }

    if (first) {
      expect(loading()).toExist();
      expect(prev().findComponent(QBtn).props("disable")).toBeTrue();
      expect(next().findComponent(QBtn).props("disable")).toBeTrue();
      await handlePromise.runAll();
      expect(loading()).not.toExist();
      expect(prev().findComponent(QBtn).props("disable")).toBeTrue();
      expect(next().findComponent(QBtn).props("disable")).toBeFalse();
    } else {
      expect(loading()).not.toExist();
      expect(prev().findComponent(QBtn).props("disable")).toBeTrue();
      expect(next().findComponent(QBtn).props("disable")).toBeFalse();
    }

    {
      const expected = [[icon]];

      await pickIcon().trigger("click");
      expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
      expect(dialog.props("modelValue")).toBeFalse();
      await button.trigger("click");
      expect(dialog.props("modelValue")).toBeTrue();
    }

    {
      const expected = [[icon], [undefined]];

      await wrapper.setProps({ modelValue: icon });
      await pickIcon().trigger("click");
      expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
      expect(dialog.props("modelValue")).toBeFalse();
      await button.trigger("click");
      expect(dialog.props("modelValue")).toBeTrue();
    }

    {
      await next().trigger("click");
      expect(prev().findComponent(QBtn).props("disable")).toBeFalse();
      expect(next().findComponent(QBtn).props("disable")).toBeFalse();
    }

    {
      await prev().trigger("click");
      expect(prev().findComponent(QBtn).props("disable")).toBeTrue();
      expect(next().findComponent(QBtn).props("disable")).toBeFalse();
    }

    {
      expect(pagination()).not.toHaveClass("invisible");
      search().vm.$emit("update:modelValue", "aB3umD5inT7g");
      await nextTick();
      expect(pagination()).toHaveClass("invisible");
      expect(prev().findComponent(QBtn).props("disable")).toBeTrue();
      expect(next().findComponent(QBtn).props("disable")).toBeTrue();
    }

    function loading(): vueTestUtils.DOMWrapper<Element> {
      return wrapper.findComponent(QCard).find(".loading");
    }

    function next(): vueTestUtils.VueWrapper {
      return wrapper.findComponent<ComponentPublicInstance>(".next");
    }

    function pagination(): vueTestUtils.DOMWrapper<Element> {
      return wrapper.findComponent(QCard).find(".pagination");
    }

    function pickIcon(): vueTestUtils.VueWrapper {
      return wrapper.findComponent<ComponentPublicInstance>(".pick-icon");
    }

    function prev(): vueTestUtils.VueWrapper {
      return wrapper.findComponent<ComponentPublicInstance>(".prev");
    }

    function search(): vueTestUtils.VueWrapper {
      return wrapper.findComponent<ComponentPublicInstance>(".search");
    }
  });
});
