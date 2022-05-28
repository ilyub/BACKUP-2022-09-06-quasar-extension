import type { BaseButton } from "./BaseButton.extras";
import type { GlobalComponent } from "./api";

export namespace IconButton {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: BaseButton.Global;
  }

  export interface ParentProps extends BaseButton.Props {}

  export interface Props extends ParentProps {}

  export interface Slots extends BaseButton.Slots {}
}
