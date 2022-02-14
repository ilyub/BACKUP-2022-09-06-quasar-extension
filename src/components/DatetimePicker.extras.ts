import type { QFieldProps } from "quasar";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { DictionaryAndWords } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";
import type { stringU } from "@skylib/functions/es/types/core";

import type { ExtendQuasarProps, PropOptions } from "./api";

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

export const icons: Icons<"am" | "close" | "pickDate" | "pickTime" | "pm"> =
  baseIcons;

export const lang: DictionaryAndWords<"PickDate" | "Save"> = baseLang;

export type DatetimePickerProps = ExtendQuasarProps<
  QFieldProps,
  {
    readonly max: PropOptions<stringU>;
    readonly min: PropOptions<stringU>;
    readonly modelValue: PropOptions<stringU>;
  }
>;
