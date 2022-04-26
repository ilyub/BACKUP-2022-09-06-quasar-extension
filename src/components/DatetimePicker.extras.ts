import { icons as baseIcons, lang as baseLang } from "@skylib/facades";
import type { GlobalComponent } from "./api";
import type { stringU } from "@skylib/functions";
import type { QFieldProps, QFieldSlots } from "quasar";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends ModuleIcons {}
    }

    namespace lang {
      interface Context {
        aaa: true;
      }

      interface Word extends ModuleWord {}
    }
  }
}

export const icons: baseIcons.Icons<keyof ModuleIcons> = baseIcons;

export const lang: baseLang.Lang<keyof ModuleWord, never> = baseLang;

export interface DatetimePickerOwnProps {
  readonly max?: stringU;
  readonly min?: stringU;
  readonly modelValue?: stringU;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: (value: stringU) => void;
}

export interface DatetimePickerParentProps
  extends Omit<QFieldProps, "modelValue" | "onUpdate:modelValue"> {}

export interface DatetimePickerProps
  extends DatetimePickerParentProps,
    DatetimePickerOwnProps {}

export type DatetimePickerSlots = QFieldSlots;

export type GlobalDatetimePicker = GlobalComponent<
  DatetimePickerProps,
  DatetimePickerSlots
>;

export interface ModuleIcons {
  readonly am: true;
  readonly close: true;
  readonly pickDate: true;
  readonly pickTime: true;
  readonly pm: true;
}

export interface ModuleWord {
  readonly PickDate: true;
  readonly Save: true;
}
