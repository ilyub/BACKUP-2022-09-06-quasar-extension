import type { NumericInput } from "./NumericInput.extras";
import type { GlobalComponent } from "./api";
import type { numberU } from "@skylib/functions";

export namespace TimeInput {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: NumericInput.Global;
  }

  export interface OwnProps {
    readonly modelValue?: numberU;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: numberU) => void;
  }

  export interface ParentProps extends NumericInput.Props {}

  export interface ParentSlots extends NumericInput.Slots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots {}
}
