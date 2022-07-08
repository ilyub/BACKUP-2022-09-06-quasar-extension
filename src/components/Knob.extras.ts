import type { QKnob, QKnobProps, QKnobSlots } from "quasar";
import type { GlobalComponent } from "./api";
import type { booleanU } from "@skylib/functions";

export namespace Knob {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: QKnob;
  }

  export interface OwnProps {
    readonly disable?: booleanU;
    readonly inline?: booleanU;
    readonly modelValue: number;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: number) => void;
  }

  export interface ParentProps extends Omit<QKnobProps, keyof OwnProps> {}

  export interface ParentSlots extends QKnobSlots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots {}
}
