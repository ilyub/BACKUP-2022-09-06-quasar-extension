import type { QFieldProps, QFieldSlots } from "quasar";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { DictionaryAndWords } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";
import type { stringU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly am: string;
        readonly close: string;
        readonly pickDate: string;
        readonly pickTime: string;
        readonly pm: string;
      }
    }

    namespace lang {
      interface Word {
        readonly PickDate: true;
        readonly Save: true;
      }
    }
  }
}

export interface DatetimePickerParentProps
  extends Omit<QFieldProps, "modelValue" | "onUpdate:modelValue"> {}

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

export interface DatetimePickerProps
  extends DatetimePickerParentProps,
    DatetimePickerOwnProps {}

export type DatetimePickerSlots = QFieldSlots;

export type GlobalDatetimePicker = GlobalComponent<
  DatetimePickerProps,
  DatetimePickerSlots
>;

export const icons: Icons<"am" | "close" | "pickDate" | "pickTime" | "pm"> =
  baseIcons;

export const lang: DictionaryAndWords<"PickDate" | "Save"> = baseLang;
