import type { GlobalComponent, plugins } from "./api";
import type { booleanU } from "@skylib/functions";
import type { QToggle, QToggleProps, QToggleSlots } from "quasar";

export namespace Toggle {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: QToggle;
  }

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

  export interface ParentProps
    extends Omit<QToggleProps, keyof OwnProps | keyof PluginProps> {}

  export interface ParentSlots extends QToggleSlots {}

  export interface PluginProps extends plugins.langProps.Props<"label"> {}

  export interface Props extends ParentProps, PluginProps, OwnProps {}

  export interface Slots extends ParentSlots {}
}
