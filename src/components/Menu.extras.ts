import type { GlobalComponent, plugins } from "./api";
import type { QMenu, QMenuProps, QMenuSlots } from "quasar";

export namespace Menu {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QMenu;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnProps {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps
    extends Omit<QMenuProps, keyof OwnProps>,
      Omit<plugins.useDirection.Props, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QMenuSlots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
