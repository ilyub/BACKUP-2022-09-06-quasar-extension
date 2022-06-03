import type { GlobalComponent } from "./api";
import type { NumStrU } from "@skylib/functions";
import type { QTabPanelProps, QTabPanelSlots } from "quasar";

export namespace TabPanel {
  export interface Global<T extends NumStrU = NumStrU>
    extends GlobalComponent<Props<T>, Slots> {}

  export interface OwnProps<T extends NumStrU = NumStrU> {
    readonly name?: T | undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps extends Omit<QTabPanelProps, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QTabPanelSlots, keyof OwnSlots> {}

  export interface Props<T extends NumStrU = NumStrU>
    extends OwnProps<T>,
      ParentProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
