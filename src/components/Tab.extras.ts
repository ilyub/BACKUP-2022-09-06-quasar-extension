import type { GlobalComponent } from "./api";
import type { NumStrU } from "@skylib/functions";
import type { QTabProps, QTabSlots } from "quasar";

export namespace Tab {
  export interface Global<T extends NumStrU = NumStrU>
    extends GlobalComponent<Props<T>, Slots> {}

  export interface OwnProps<T extends NumStrU = NumStrU> {
    readonly name?: T | undefined;
  }

  export interface ParentProps extends Omit<QTabProps, keyof OwnProps> {}

  export interface ParentSlots extends QTabSlots {}

  export interface Props<T extends NumStrU = NumStrU>
    extends OwnProps<T>,
      ParentProps {}

  export interface Slots extends ParentSlots {}
}
