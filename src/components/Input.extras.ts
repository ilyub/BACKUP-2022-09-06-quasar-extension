import type { Field } from "./Field.extras";
import type { GlobalComponent } from "./api";
import type { stringU } from "@skylib/functions";

export namespace Input {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: Field.Global<stringU>;
  }

  export interface OwnProps {
    readonly modelValue?: stringU;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: stringU) => void;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps
    extends Omit<Field.Props<stringU>, keyof OwnProps> {}

  export interface ParentSlots
    extends Omit<Field.Slots<stringU>, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
