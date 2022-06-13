import type { Field } from "./Field.extras";
import type { GlobalComponent } from "./api";
import type { stringU } from "@skylib/functions";

export namespace Input {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: Field.Global<stringU>;
  }

  export interface OwnProps {
    readonly mask?: stringU;
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
}
