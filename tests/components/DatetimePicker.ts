import type { ComponentConstructor } from "quasar";
import { QCard, QDialog } from "quasar";
import type { ComponentPublicInstance } from "vue";
import { nextTick } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as reflect from "@skylib/functions/es/reflect";

import DatetimePicker from "@/components/DatetimePicker.vue";
import * as testUtils from "@/testUtils";

window.scrollTo = jest.fn();

it.each([undefined, "2001-02-03 10:30"])("DatetimePicker", async modelValue => {
  const wrapper = vueTestUtils.mount(DatetimePicker, {
    global: testUtils.globalMountOptions(),
    props: { modelValue }
  });

  const dateOptions = reflect.get(wrapper.vm, "dateOptions");

  const main = wrapper.findComponent<ComponentPublicInstance>({ ref: "main" });

  const timeOptions = reflect.get(wrapper.vm, "timeOptions");

  const warnMock = jest.fn();

  const warnSpy = jest.spyOn(console, "warn");

  assert.callable(dateOptions);
  assert.callable(timeOptions);

  {
    expect(comp(QCard)).not.toExist();
    await elem("control").trigger("click");
    expect(comp(QCard)).toExist();
  }

  {
    const expected = [[modelValue]];

    expect(wrapper.emitted("update:model-value")).toBeUndefined();
    comp("date-save").vm.$emit("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  {
    warnSpy.mockImplementationOnce(warnMock);
    comp(QDialog).vm.$emit("update:model-value", false);
    await nextTick();
    expect(warnMock).toBeCalledTimes(1);
    warnMock.mockClear();
  }

  {
    await wrapper.setProps({ modelValue: "2001-02-03" });
    expect(main.props("modelValue")).toStrictEqual("Sat, 3 Feb 2001 12:00 AM");
    await wrapper.setProps({ modelValue: "2001-02-03 10:30" });
    expect(main.props("modelValue")).toStrictEqual("Sat, 3 Feb 2001 10:30 AM");
    await wrapper.setProps({ modelValue: "2001-02-03 10:30 PM" });
    expect(main.props("modelValue")).toStrictEqual("Sat, 3 Feb 2001 10:30 PM");
    await wrapper.setProps({ modelValue: "invalid" });
    expect(main.props("modelValue")).toBeUndefined();
  }

  {
    expect(comp(QCard)).not.toExist();
    await comp("icon").trigger("click");
    expect(comp(QCard)).toExist();
  }

  {
    await wrapper.setProps({
      max: "2001-02-03 14:30",
      min: "2001-02-03 12:30"
    });
    expect(dateOptions("2001/02/02")).toBeFalse();
    expect(dateOptions("2001/02/03")).toBeTrue();
    expect(dateOptions("2001/02/04")).toBeFalse();
    expect(timeOptions(11)).toBeTrue();
    expect(timeOptions(12)).toBeTrue();
    expect(timeOptions(13)).toBeTrue();
    expect(timeOptions(14)).toBeTrue();
    expect(timeOptions(15)).toBeTrue();
    await wrapper.setProps({ max: undefined, min: undefined });
  }

  {
    expect(comp("date")).toExist();
    expect(comp("time")).not.toExist();
    await popupElem("next").trigger("click");
    expect(comp("date")).toExist();
    expect(comp("time")).not.toExist();
  }

  {
    const expected = [[modelValue], [undefined]];

    warnSpy.mockImplementationOnce(warnMock);
    main.vm.$emit("update:model-value", undefined);
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
    expect(warnMock).toBeCalledTimes(1);
    warnMock.mockClear();
  }

  {
    const expected = [[modelValue], [undefined], ["2001-02-04 22:30"]];

    warnSpy.mockImplementationOnce(warnMock);
    comp("date").vm.$emit("update:model-value", "2001-02-04 22:30");
    await popupElem("prev").trigger("click");
    comp("date-save").vm.$emit("click");
    await popupElem("next").trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
    expect(warnMock).toBeCalledTimes(1);
    warnMock.mockClear();
  }

  {
    const expected = [
      [modelValue],
      [undefined],
      ["2001-02-04 22:30"],
      ["2001-02-04 23:30"]
    ];

    warnSpy.mockImplementationOnce(warnMock);
    comp("time").vm.$emit("update:model-value", "2001-02-04 23:30");
    comp("time-save").vm.$emit("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
    expect(warnMock).toBeCalledTimes(1);
    warnMock.mockClear();
  }

  {
    const expected = [
      [modelValue],
      [undefined],
      ["2001-02-04 22:30"],
      ["2001-02-04 23:30"],
      ["2001-02-04 11:30"]
    ];

    warnSpy.mockImplementationOnce(warnMock);
    comp("pm").vm.$emit("click");
    comp("time-save").vm.$emit("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
    expect(warnMock).toBeCalledTimes(1);
    warnMock.mockClear();
  }

  {
    await popupElem("prev").trigger("click");
    expect(comp("date")).toExist();
    expect(comp("time")).not.toExist();
  }

  {
    await popupElem("next").trigger("click");
    expect(comp("date")).not.toExist();
    expect(comp("time")).toExist();
  }

  {
    await wrapper.setProps({
      max: "2001-02-04 14:30",
      min: "2001-02-04 12:30"
    });
    expect(dateOptions("2001/02/03")).toBeFalse();
    expect(dateOptions("2001/02/04")).toBeTrue();
    expect(dateOptions("2001/02/05")).toBeFalse();
    expect(timeOptions(11)).toBeFalse();
    expect(timeOptions(12)).toBeTrue();
    expect(timeOptions(13)).toBeTrue();
    expect(timeOptions(14)).toBeTrue();
    expect(timeOptions(15)).toBeFalse();
    expect(timeOptions(12, 29)).toBeFalse();
    expect(timeOptions(12, 30)).toBeTrue();
    expect(timeOptions(14, 30)).toBeTrue();
    expect(timeOptions(14, 31)).toBeFalse();
    await wrapper.setProps({ max: undefined, min: undefined });
  }

  function comp(ref: string | ComponentConstructor): vueTestUtils.VueWrapper {
    return wrapper.findComponent<ComponentPublicInstance>(
      is.string(ref) ? `.ref-datetime-picker-${ref}` : ref
    );
  }

  function elem(ref: string): vueTestUtils.DOMWrapper<Element> {
    return wrapper.find(`.ref-datetime-picker-${ref}`);
  }

  function popupElem(ref: string): vueTestUtils.DOMWrapper<Element> {
    return comp(QCard).find(`.ref-datetime-picker-${ref}`);
  }
});
