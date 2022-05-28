import type { Switchable } from "./Switchable.extras";
import type { GlobalComponent } from "./api";

export namespace PageSection {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: Switchable.Global;
  }

  export interface ParentProps extends Switchable.Props {}

  export interface Props extends ParentProps {}

  export interface Slots extends Switchable.Slots {}
}
