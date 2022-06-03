import { lang as baseLang } from "@skylib/facades";
import type { plugins, GlobalComponent } from "./api";
import type { booleanU, stringU } from "@skylib/functions";
import type { QInput, QInputProps, QInputSlots } from "quasar";

export namespace Input {
  export const lang: baseLang.Lang<never, never> = baseLang;

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QInput;
  }

  export interface OwnProps {
    readonly disable?: booleanU;
    readonly label?: stringU;
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
    extends Omit<QInputProps, keyof OwnProps>,
      Omit<plugins.useValidation.Props<stringU>, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QInputSlots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
