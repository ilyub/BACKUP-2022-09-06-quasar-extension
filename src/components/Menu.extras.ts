import type { GlobalComponent, plugins } from "./api";
import type { QMenu, QMenuProps, QMenuSlots } from "quasar";

export namespace Menu {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QMenu;
  }

  export interface ParentProps extends Omit<QMenuProps, keyof PluginProps> {}

  export interface ParentSlots extends QMenuSlots {}

  export interface PluginProps extends plugins.useDirection.Props {}

  export interface Props extends ParentProps, PluginProps {}

  export interface Slots extends ParentSlots {}
}
