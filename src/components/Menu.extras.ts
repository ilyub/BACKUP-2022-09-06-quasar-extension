import type { GlobalComponent, plugins } from "./api";
import type { QMenu, QMenuProps, QMenuSlots } from "quasar";

export namespace Menu {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QMenu;
  }

  export interface ParentProps extends QMenuProps, plugins.useDirection.Props {}

  export interface Props extends ParentProps {}

  export interface Slots extends QMenuSlots {}
}
