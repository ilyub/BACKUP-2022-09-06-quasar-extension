import type { BaseButton } from "./BaseButton.extras";
import type { GlobalComponent } from "./api";

export namespace FormButton {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: BaseButton.Global;
  }

  export interface ParentProps extends BaseButton.Props {}

  export interface ParentSlots extends BaseButton.Slots {}

  export interface Props extends ParentProps {}

  export interface Slots extends ParentSlots {}
}
