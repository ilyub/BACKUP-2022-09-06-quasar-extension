import type { QFieldProps, QFieldSlots } from "quasar";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { Lang } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";
import type { stringU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";

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

export const icons: Icons<keyof ModuleIcons> = baseIcons;

export const lang: Lang<keyof ModuleWord, never> = baseLang;

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
