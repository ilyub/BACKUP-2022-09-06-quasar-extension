import type { NumericInput } from "./NumericInput.extras";
import type { GlobalComponent } from "./api";
import type { numberU } from "@skylib/functions";

export namespace TimeInput {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: NumericInput.Global;
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

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps
    extends Omit<NumericInput.Props, keyof OwnProps> {}

  export interface ParentSlots
    extends Omit<NumericInput.Slots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
