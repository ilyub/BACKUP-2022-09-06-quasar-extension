import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { Lang } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";
import type { numberU, stringU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";
import { createInjectable } from "./api";
import type { IconButtonProps, IconButtonSlots } from "./IconButton.extras";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends ModuleIcons {}
    }

    namespace lang {
      interface Word extends ModuleWord {}
    }
  }
}

export interface ModuleIcons {
  readonly chevronLeft: true;
  readonly chevronRight: true;
  readonly close: true;
}

export interface ModuleWord {
  readonly IconPicker: true;
  readonly Of: true;
}

export type GlobalIconPicker = GlobalComponent<
  IconPickerProps,
  IconPickerSlots
>;

export interface IconPickerParentProps
  extends Omit<IconButtonProps, "modelValue" | "onUpdate:modelValue"> {}

export interface IconPickerOwnProps {
  readonly cols?: numberU;
  readonly modelValue?: stringU;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: (value: stringU) => void;
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
  return { iconTooltips: false };
});

export const icons: Icons<"chevronLeft" | "chevronRight" | "close"> = baseIcons;

export const lang: Lang<keyof ModuleWord, never> = baseLang;
