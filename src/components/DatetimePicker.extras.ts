import type {
  GlobalComponentConstructor,
  QFieldProps,
  QFieldSlots
} from "quasar";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { DictionaryAndWords } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";
import type { stringU } from "@skylib/functions/es/types/core";

import type { ReadonlyOmit } from "./api";

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

// eslint-disable-next-line @skylib/prefer-readonly
export type DatetimePickerParentProps = ReadonlyOmit<QFieldProps, "modelValue">;

export interface DatetimePickerOwnProps {
  readonly max?: stringU;
  readonly min?: stringU;
  readonly modelValue?: stringU;
}

// eslint-disable-next-line @skylib/prefer-readonly
export interface DatetimePickerProps
  extends DatetimePickerParentProps,
    DatetimePickerOwnProps {}

// eslint-disable-next-line @skylib/prefer-readonly
export type DatetimePickerSlots = QFieldSlots;

export type GlobalDatetimePicker = GlobalComponentConstructor<
  DatetimePickerProps,
  DatetimePickerSlots
>;

export const icons: Icons<"am" | "close" | "pickDate" | "pickTime" | "pm"> =
  baseIcons;

export const lang: DictionaryAndWords<"PickDate" | "Save"> = baseLang;
