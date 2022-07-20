import { icons as baseIcons, lang as baseLang } from "@skylib/facades";
import type { Field } from "./Field.extras";
import type { GlobalComponent } from "./api";
import type { stringU } from "@skylib/functions";

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
    /**
     * Date options.
     *
     * @param date - Date.
     * @returns _True_ if option is enabled, _false_ otherwise.
     */
    readonly dateOptions: (date: string) => boolean;
    readonly main?: Field.Global<stringU>;
    /**
     * Time options.
     *
     * @param hours - Hours.
     * @param minutes - Minutes.
     * @returns _True_ if option is enabled, _false_ otherwise.
     */
    readonly timeOptions: (hours: number, minutes: number | null) => boolean;
  }

  export interface Icon {
    readonly am: true;
    readonly close: true;
    readonly pickDate: true;
    readonly pickTime: true;
    readonly pm: true;
  }

  export interface OwnProps {
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

  export interface ParentProps
    extends Omit<Field.Props<stringU>, keyof OwnProps> {}

  export interface ParentSlots extends Field.Slots<stringU> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots {}

  export interface Word {
    readonly Save: true;
  }
}
