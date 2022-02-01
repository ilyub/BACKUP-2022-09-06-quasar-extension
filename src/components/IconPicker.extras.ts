import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { DictionaryAndWords } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";

import { createInjectable } from "./api";

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

export const {
  inject: injectIconPickerSettings,
  provide: provideIconPickerSettings,
  test: testIconPickerSettings
} = createInjectable<IconPickerSettings>(() => {
  return {
    iconTooltips: false
  };
});

export const icons: Icons<"chevronLeft" | "chevronRight" | "close"> = baseIcons;

export const lang: DictionaryAndWords<"IconPicker" | "Of"> = baseLang;
