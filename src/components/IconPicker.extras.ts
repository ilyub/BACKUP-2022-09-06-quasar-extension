import type { ComputedRef, InjectionKey } from "vue";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { DictionaryAndWords } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly chevronLeft: string;
        readonly chevronRight: string;
        readonly close: string;
      }
    }

    namespace lang {
      interface Word {
        readonly IconPicker: true;
        readonly Of: true;
      }
    }
  }
}

export interface IconPickerSettings {
  readonly iconTooltips: boolean;
}

export type InjectIconPickerSettings = InjectionKey<
  ComputedRef<IconPickerSettings>
>;

export const icons: Icons<"chevronLeft" | "chevronRight" | "close"> = baseIcons;

export const injectIconPickerSettings: InjectIconPickerSettings =
  Symbol("IconPickerSettings");

export const lang: DictionaryAndWords<"IconPicker" | "Of"> = baseLang;
