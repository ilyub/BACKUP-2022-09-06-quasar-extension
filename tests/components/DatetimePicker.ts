import type { ComponentPublicInstance } from "vue";
import { nextTick } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import DatetimePicker from "@/components/DatetimePicker.vue";
import * as testUtils from "@/testUtils";

it.each([
  {
    inputValue: "",
    modelValue: "",
    modelValueUpdate: "",
    pm: false
  },
  {
    inputValue: "",
    modelValue: "invalid",
    modelValueUpdate: "",
    pm: false
  },
  {
    inputValue: "Sat, 3 Feb 2001 12:00 AM",
    modelValue: "2001-02-03",
    modelValueUpdate: "2001-02-03 00:00",
    pm: false
  },
  {
    inputValue: "Sat, 3 Feb 2001 10:30 AM",
    modelValue: "2001-02-03 10:30",
    modelValueUpdate: "2001-02-03 10:30",
    pm: false
  },
  {
    inputValue: "Sat, 3 Feb 2001 10:30 PM",
    modelValue: "2001-02-03 22:30",
    modelValueUpdate: "2001-02-03 22:30",
    pm: true
  }
])(
  "DatetimePicker",
  async ({ inputValue, modelValue, modelValueUpdate, pm }) => {
    const wrapper = vueTestUtils.mount(DatetimePicker, {
      global: testUtils.globalMountOptions(),
      props: {
        modelValue
      }
    });

    const main = wrapper.findComponent<ComponentPublicInstance>({
      ref: "main"
    });

    const warnMock = jest.fn();

    const warnSpy = jest.spyOn(console, "warn");

    {
      expect(main.props("modelValue")).toStrictEqual(inputValue);
    }

    {
      expect(comp("card")).not.toExist();
      await comp("activator").trigger("click");
      expect(comp("date")).toExist();
      expect(comp("time")).not.toExist();
    }

    {
      const expected = [[modelValueUpdate]];

      expect(wrapper.emitted("update:model-value")).toBeUndefined();
      comp("date-save").vm.$emit("click");
      expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
      expect(comp("date")).toExist();
      expect(comp("time")).not.toExist();
    }

    {
      warnSpy.mockImplementation(warnMock);
      comp("date").vm.$emit("update:model-value", "2010-01-01 01:00");
      await nextTick();
      expect(comp("date")).not.toExist();
      expect(comp("time")).toExist();
      expect(warnMock).toBeCalledTimes(1);
      expect(warnMock).toBeCalledWith(
        '[Vue warn]: Component emitted event "update:model-value" but it is neither declared in the emits option nor as an "onUpdate:model-value" prop.'
      );
      warnMock.mockClear();
    }

    {
      await elem("prev").trigger("click");
      expect(comp("date")).toExist();
      expect(comp("time")).not.toExist();
    }

    {
      await elem("next").trigger("click");
      expect(comp("date")).not.toExist();
      expect(comp("time")).toExist();
    }

    {
      warnSpy.mockImplementation(warnMock);
      comp("time").vm.$emit("update:model-value", "2010-01-01 02:00");
      await nextTick();
      expect(comp("date")).not.toExist();
      expect(comp("time")).toExist();
      expect(warnMock).toBeCalledTimes(1);
      expect(warnMock).toBeCalledWith(
        '[Vue warn]: Component emitted event "update:model-value" but it is neither declared in the emits option nor as an "onUpdate:model-value" prop.'
      );
      warnMock.mockClear();
    }

    {
      const expected = [
        [modelValueUpdate],
        [pm ? "2010-01-01 14:00" : "2010-01-01 02:00"]
      ];

      comp("time-save").vm.$emit("click");
      expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
      expect(comp("date")).not.toExist();
      expect(comp("time")).toExist();
    }

    {
      const expected = [
        [modelValueUpdate],
        [pm ? "2010-01-01 14:00" : "2010-01-01 02:00"],
        [pm ? "2010-01-01 02:00" : "2010-01-01 14:00"]
      ];

      comp("pm").vm.$emit("click");
      comp("time-save").vm.$emit("click");
      expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
      expect(comp("date")).not.toExist();
      expect(comp("time")).toExist();
    }

    {
      const expected = [
        [modelValueUpdate],
        [pm ? "2010-01-01 14:00" : "2010-01-01 02:00"],
        [pm ? "2010-01-01 02:00" : "2010-01-01 14:00"],
        [""]
      ];

      main.vm.$emit("update:model-value", "");
      expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
    }

    function comp(ref: string): vueTestUtils.VueWrapper {
      return wrapper.findComponent<ComponentPublicInstance>(
        `.ref-datetime-picker-${ref}`
      );
    }

    function elem(ref: string): vueTestUtils.DOMWrapper<Element> {
      return comp("card").find(`.ref-datetime-picker-${ref}`);
    }
  }
);
