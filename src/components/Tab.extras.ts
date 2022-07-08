import type { QTabProps, QTabSlots } from "quasar";
import type { GlobalComponent } from "./api";
import type { NumStrU } from "@skylib/functions";

export namespace Tab {
  export interface Global<T extends NumStrU = NumStrU>
    extends GlobalComponent<Props<T>, Slots> {}

  export interface OwnProps<T extends NumStrU = NumStrU> {
    readonly name?: T | undefined;
  }

  export interface ParentProps extends Omit<QTabProps, keyof OwnProps> {}

  export interface ParentSlots extends QTabSlots {}

  export interface Props<T extends NumStrU = NumStrU>
    extends ParentProps,
      OwnProps<T> {}

  export interface Slots extends ParentSlots {}
}
