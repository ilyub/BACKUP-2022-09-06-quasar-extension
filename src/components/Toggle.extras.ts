import type { GlobalComponent } from "./api";
import type { booleanU } from "@skylib/functions";
import type { QToggleProps, QToggleSlots } from "quasar";

export namespace Toggle {
  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface OwnProps {
    readonly disable?: booleanU;
    readonly modelValue: boolean;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: boolean) => void;
  }

  export interface ParentProps extends Omit<QToggleProps, keyof OwnProps> {}

  export interface ParentSlots extends QToggleSlots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots {}
}
