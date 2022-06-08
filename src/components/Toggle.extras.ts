import type { GlobalComponent, plugins } from "./api";
import type { booleanU } from "@skylib/functions";
import type { QToggle, QToggleProps, QToggleSlots } from "quasar";

export namespace Toggle {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QToggle;
  }

  export interface OwnProps extends plugins.useLabel.Props {
    readonly disable?: booleanU;
    readonly modelValue: boolean;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: boolean) => void;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps extends Omit<QToggleProps, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QToggleSlots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
