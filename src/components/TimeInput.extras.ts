import type { NumericInput } from "./NumericInput.extras";
import type { GlobalComponent } from "./api";
import type { numberU } from "@skylib/functions";

export namespace TimeInput {
  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface OwnProps {
    readonly modelValue?: numberU;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: numberU) => void;
  }

  export interface ParentProps
    extends Omit<NumericInput.Props, keyof OwnProps> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends NumericInput.Slots {}
}
