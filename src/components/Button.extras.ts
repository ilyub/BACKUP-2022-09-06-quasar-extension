import type { BaseButton } from "./BaseButton.extras";
import type { GlobalComponent } from "./api";

export namespace Button {
  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface ParentProps extends BaseButton.Props {}

  export interface ParentSlots extends BaseButton.Slots {}

  export interface Props extends ParentProps {}

  export interface Slots extends ParentSlots {}
}
