import type { BaseButton } from "./BaseButton.extras";
import type { GlobalComponent } from "./api";

export namespace IconButton {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: BaseButton.Global;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnProps {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps extends Omit<BaseButton.Props, keyof OwnProps> {}

  export interface ParentSlots extends Omit<BaseButton.Slots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
