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

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps extends Omit<QTabsProps, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QTabsSlots, keyof OwnSlots> {}

  export interface Props<T extends NumStrU = NumStrU>
    extends ParentProps,
      OwnProps<T> {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
