import type { GlobalComponent } from "./api";
import type { NumStrU } from "@skylib/functions";
import type { QTabsProps, QTabsSlots } from "quasar";

export namespace Tabs {
  export interface Global<T extends NumStrU = NumStrU>
    extends GlobalComponent<Props<T>, Slots> {}

  export interface OwnProps<T extends NumStrU = NumStrU> {
    readonly modelValue?: T | undefined;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: T) => void;
  }

  export interface ParentProps extends Omit<QTabsProps, keyof OwnProps> {}

  export interface ParentSlots extends QTabsSlots {}

  export interface Props<T extends NumStrU = NumStrU>
    extends OwnProps<T>,
      ParentProps {}

  export interface Slots extends ParentSlots {}
}
