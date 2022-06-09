import type { GlobalComponent } from "./api";
import type { NumStrU } from "@skylib/functions";
import type { QTabPanelProps, QTabPanelSlots } from "quasar";

export namespace TabPanel {
  export interface Global<T extends NumStrU = NumStrU>
    extends GlobalComponent<Props<T>, Slots> {}

  export interface OwnProps<T extends NumStrU = NumStrU> {
    readonly name?: T | undefined;
  }

  export interface ParentProps extends Omit<QTabPanelProps, keyof OwnProps> {}

  export interface ParentSlots extends QTabPanelSlots {}

  export interface Props<T extends NumStrU = NumStrU>
    extends ParentProps,
      OwnProps<T> {}

  export interface Slots extends ParentSlots {}
}
