import type { GlobalComponentConstructor } from "quasar";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { DictionaryAndWords } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";
import type { numberU, stringU } from "@skylib/functions/es/types/core";

import { createInjectable } from "./api";
import type { IconButtonProps, IconButtonSlots } from "./IconButton.extras";

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

export type GlobalIconPicker = GlobalComponentConstructor<
  IconPickerProps,
  IconPickerSlots
>;

export interface IconPickerParentProps
  extends Omit<IconButtonProps, "modelValue"> {}

export interface IconPickerOwnProps {
  readonly cols?: numberU;
  readonly modelValue?: stringU;
  readonly placeholder: string;
  readonly rows?: numberU;
  readonly spinnerSize?: stringU;
}

export interface IconPickerProps
  extends IconPickerParentProps,
    IconPickerOwnProps {}

export interface IconPickerSettings {
  readonly iconTooltips: boolean;
}

export type IconPickerSlots = IconButtonSlots;

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
