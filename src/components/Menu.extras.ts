import type { GlobalComponent, plugins } from "./api";
import type { QMenuProps, QMenuSlots } from "quasar";

export namespace Menu {
  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface OwnProps extends plugins.useDirection.Props {}

  export interface ParentProps extends QMenuProps {}

  export interface Props extends ParentProps {}

  export interface Slots extends QMenuSlots {}
}
