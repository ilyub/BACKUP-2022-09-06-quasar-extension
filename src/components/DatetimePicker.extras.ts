import { icons as baseIcons, lang as baseLang } from "@skylib/facades";
import type { GlobalComponent, plugins } from "./api";
import type { booleanU, stringU } from "@skylib/functions";
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

  export interface OwnProps {
    readonly label?: stringU;
    readonly max?: stringU;
    readonly min?: stringU;
    readonly modelValue?: stringU;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: stringU) => void;
    readonly required?: booleanU;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps
    extends Omit<QFieldProps, keyof OwnProps>,
      Omit<plugins.useValidation.Props<stringU>, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QFieldSlots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}

  export interface Word {
    readonly Save: true;
  }
}
