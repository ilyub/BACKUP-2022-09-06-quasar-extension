import type { Item } from "./Item.extras";
import type { GlobalComponent, plugins } from "./api";

export namespace MenuItem {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: Item.Global;
  }

  export interface ParentProps
    extends Item.Props,
      plugins.useConfirmedClick.Props {}

  export interface ParentSlots extends Item.Slots {}

  export interface Props extends ParentProps {}

  export interface Slots extends ParentSlots {}
}
