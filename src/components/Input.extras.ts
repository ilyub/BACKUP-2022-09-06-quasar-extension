import type { plugins, GlobalComponent } from "./api";
import type { booleanU, stringU } from "@skylib/functions";
import type { QInput, QInputProps, QInputSlots } from "quasar";

export namespace Input {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QInput;
  }

  export interface OwnProps extends plugins.useValidation.Props<stringU> {
    readonly disable?: booleanU;
    readonly modelValue?: stringU;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: stringU) => void;
  }

  export interface ParentProps extends Omit<QInputProps, keyof OwnProps> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends QInputSlots {}
}
