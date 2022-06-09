import type { Item } from "./Item.extras";
import type { GlobalComponent, plugins } from "./api";

export namespace MenuItem {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: Item.Global;
  }

  export interface ParentProps extends Item.Props {}

  export interface ParentSlots extends Item.Slots {}

  export interface PluginProps extends plugins.confirmedClick.Props {}

  export interface Props extends ParentProps, PluginProps {}

  export interface Slots extends ParentSlots {}
}
