import { icons as baseIcons, lang as baseLang } from "@skylib/facades";
import type { GlobalComponent } from "./api";
import type { IconButton } from "./IconButton.extras";
import { computed } from "vue";
import { injectableSettings } from "./api";
import type { stringU } from "@skylib/functions";

export namespace IconPicker {
  export const defaultSettings = computed(
    (): Settings => ({
      cols: 7,
      iconTooltips: false,
      rows: 5,
      spinnerSize: "70px"
    })
  );

  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(defaultSettings);

  export const icons: baseIcons.Icons<keyof Icon> = baseIcons;

  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: IconButton.Global;
  }

  export interface Icon {
    readonly chevronLeft: true;
    readonly chevronRight: true;
    readonly close: true;
  }

  export interface OwnProps {
    readonly modelValue?: stringU;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: stringU) => void;
    readonly placeholder: string;
  }

  export interface ParentProps extends IconButton.Props {}

  export interface ParentSlots extends IconButton.Slots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Settings {
    readonly cols: number;
    readonly iconTooltips: boolean;
    readonly rows: number;
    readonly spinnerSize: string;
  }

  export interface Slots extends ParentSlots {}

  export interface Word {
    readonly IconPicker: true;
    readonly Of: true;
  }
}

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends IconPicker.Icon {}
    }

    namespace lang {
      interface Word extends IconPicker.Word {}
    }
  }
}
