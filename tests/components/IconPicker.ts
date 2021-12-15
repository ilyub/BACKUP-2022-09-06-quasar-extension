import { QBtn, QCard, QDialog } from "quasar";
import type { ComponentPublicInstance } from "vue";
import { nextTick } from "vue";
import * as mdi from "@mdi/js-dynamic";
import * as vueTestUtils from "@vue/test-utils";

import { handlePromise } from "@skylib/facades/es/handlePromise";
import * as configurableTestDelay from "@skylib/framework/es/facade-implementations/testDelay/configurableTestDelay";
import * as a from "@skylib/functions/es/array";
import * as o from "@skylib/functions/es/object";

import IconPicker from "@/components/IconPicker.vue";
import NavButton from "@/components/NavButton.vue";
import * as testUtils from "@/testUtils";

it("IconPicker", async () => {
  const wrapper = vueTestUtils.mount(IconPicker, {
    global: testUtils.globalMountOptions(),
    props: {
      placeholder: ""
    }
  });

  const button = wrapper.findComponent(NavButton);

  const dialog = wrapper.findComponent(QDialog);

  const icon = mdi[a.first(o.keys(mdi).filter(id => id.startsWith("mdi")))];

  configurableTestDelay.configure({
    enabled: true,
    timeout: 1000
  });
  window.scrollTo = jest.fn();

  {
    expect(dialog.props("modelValue")).toBeFalse();
    await button.trigger("click");
    expect(dialog.props("modelValue")).toBeTrue();
  }

  {
    expect(loading()).toExist();
    expect(prev().findComponent(QBtn).props("disable")).toBeTrue();
    expect(next().findComponent(QBtn).props("disable")).toBeTrue();
    await handlePromise.runAll();
    expect(loading()).not.toExist();
    expect(prev().findComponent(QBtn).props("disable")).toBeTrue();
    expect(next().findComponent(QBtn).props("disable")).toBeFalse();
  }

  {
    const expected = [[icon]];

    await pickIcon().trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
    expect(dialog.props("modelValue")).toBeFalse();
    await button.trigger("click");
    expect(dialog.props("modelValue")).toBeTrue();
  }

  {
    const expected = [[icon], [undefined]];

    await wrapper.setProps({ modelValue: icon });
    await pickIcon().trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
    expect(dialog.props("modelValue")).toBeFalse();
    await button.trigger("click");
    expect(dialog.props("modelValue")).toBeTrue();
  }

  {
    await closeButton().trigger("click");
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
    search().vm.$emit("update:model-value", "aB3umD5inT7g");
    await nextTick();
    expect(pagination()).toHaveClass("invisible");
    expect(prev().findComponent(QBtn).props("disable")).toBeTrue();
    expect(next().findComponent(QBtn).props("disable")).toBeTrue();
  }

  function closeButton(): vueTestUtils.VueWrapper<ComponentPublicInstance> {
    return wrapper.findComponent(".close");
  }

  function loading(): vueTestUtils.DOMWrapper<Element> {
    return wrapper.findComponent(QCard).find(".loading");
  }

  function next(): vueTestUtils.VueWrapper<ComponentPublicInstance> {
    return wrapper.findComponent(".next");
  }

  function pagination(): vueTestUtils.DOMWrapper<Element> {
    return wrapper.findComponent(QCard).find(".pagination");
  }

  function pickIcon(): vueTestUtils.VueWrapper<ComponentPublicInstance> {
    return wrapper.findComponent(".pick-icon");
  }

  function prev(): vueTestUtils.VueWrapper<ComponentPublicInstance> {
    return wrapper.findComponent(".prev");
  }

  function search(): vueTestUtils.VueWrapper<ComponentPublicInstance> {
    return wrapper.findComponent(".search");
  }
});
