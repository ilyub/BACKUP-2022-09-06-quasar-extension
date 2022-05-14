import type { GlobalComponent } from "./api";
import type { QCardActionsProps, QCardActionsSlots } from "quasar";

export namespace CardActions {
  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface ParentProps extends QCardActionsProps {}

  export interface Props extends ParentProps {}

  export interface Slots extends QCardActionsSlots {}
}
