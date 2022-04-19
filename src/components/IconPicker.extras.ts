import { icons as baseIcons, lang as baseLang } from "@skylib/facades";
import type { numberU, stringU } from "@skylib/functions";
import type { IconButtonProps, IconButtonSlots } from "./IconButton.extras";
import type { GlobalComponent } from "./api";
import { createInjectable } from "./api";

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

export const {
  inject: injectIconPickerSettings,
  provide: provideIconPickerSettings,
  test: testIconPickerSettings
} = createInjectable<IconPickerSettings>(() => {
  return { iconTooltips: false };
});

export const icons: baseIcons.Icons<"chevronLeft" | "chevronRight" | "close"> =
  baseIcons;

export const lang: baseLang.Lang<keyof ModuleWord, never> = baseLang;

export type GlobalIconPicker = GlobalComponent<
  IconPickerProps,
  IconPickerSlots
>;

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

export interface IconPickerParentProps
  extends Omit<IconButtonProps, "modelValue" | "onUpdate:modelValue"> {}

export interface IconPickerProps
  extends IconPickerParentProps,
    IconPickerOwnProps {}

export interface IconPickerSettings {
  readonly iconTooltips: boolean;
}

export type IconPickerSlots = IconButtonSlots;

export interface ModuleIcons {
  readonly chevronLeft: true;
  readonly chevronRight: true;
  readonly close: true;
}

export interface ModuleWord {
  readonly IconPicker: true;
  readonly Of: true;
}
