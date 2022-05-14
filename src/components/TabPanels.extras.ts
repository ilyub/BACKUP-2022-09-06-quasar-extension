import type { GlobalComponent } from "./api";
import type { NumStrU } from "@skylib/functions";
import type { QTabPanelsProps, QTabPanelsSlots } from "quasar";

export namespace TabPanels {
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

  export interface ParentProps extends Omit<QTabPanelsProps, keyof OwnProps> {}

  export interface Props<T extends NumStrU = NumStrU>
    extends OwnProps<T>,
      ParentProps {}

  export interface Slots extends QTabPanelsSlots {}
}
