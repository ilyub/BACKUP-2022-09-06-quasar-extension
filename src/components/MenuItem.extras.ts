import type { Item } from "./Item.extras";
import type { GlobalComponent, plugins } from "./api";

export namespace MenuItem {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: Item.Global;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnProps {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps
    extends Omit<Item.Props, keyof OwnProps>,
      Omit<plugins.useConfirmedClick.Props, keyof OwnProps> {}

  export interface ParentSlots extends Omit<Item.Slots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
