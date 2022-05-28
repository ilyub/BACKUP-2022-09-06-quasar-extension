import type { Item } from "./Item.extras";
import type { GlobalComponent, plugins } from "./api";

export namespace MenuItem {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: Item.Global;
  }

  export interface OwnProps extends plugins.useConfirmedClick.Props {}

  export interface ParentProps extends Omit<Item.Props, keyof OwnProps> {}

  export interface ParentSlots extends Item.Slots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots {}
}
