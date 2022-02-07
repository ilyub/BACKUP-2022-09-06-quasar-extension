import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { DictionaryAndWords } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";
import type { stringU } from "@skylib/functions/es/types/core";

import type {
  ExtendPropOptions,
  PropOptions,
  PropOptionsDefault,
  PropOptionsRequired
} from "./api";
import { createInjectable } from "./api";
import type { IconButtonPropOptions } from "./IconButton.extras";

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

export type IconPickerPropOptions = ExtendPropOptions<
  IconButtonPropOptions,
  {
    readonly cols: PropOptionsDefault<number>;
    readonly modelValue: PropOptions<stringU>;
    readonly placeholder: PropOptionsRequired<string>;
    readonly rows: PropOptionsDefault<number>;
    readonly spinnerSize: PropOptionsDefault<string>;
  }
>;
