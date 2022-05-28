import { icons as baseIcons, lang as baseLang } from "@skylib/facades";
import type { GlobalComponent, plugins } from "./api";
import type { stringU } from "@skylib/functions";
import type { QField, QFieldProps, QFieldSlots } from "quasar";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends DatetimePicker.Icon {}
    }

    namespace lang {
      interface Word extends DatetimePicker.Word {}
    }
  }
}

export namespace DatetimePicker {
  export const icons: baseIcons.Icons<keyof Icon> = baseIcons;

  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QField;
  }

  export interface Icon {
    readonly am: true;
    readonly close: true;
    readonly pickDate: true;
    readonly pickTime: true;
    readonly pm: true;
  }

  export interface OwnProps extends plugins.useValidation.Props<stringU> {
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

  export interface ParentProps extends Omit<QFieldProps, keyof OwnProps> {}

  export interface ParentSlots extends QFieldSlots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots {}

  export interface Word {
    readonly Save: true;
  }
}
