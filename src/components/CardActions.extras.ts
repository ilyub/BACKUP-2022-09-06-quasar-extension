import type { GlobalComponent } from "./api";
import type {
  QCardActions,
  QCardActionsProps,
  QCardActionsSlots
} from "quasar";

export namespace CardActions {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QCardActions;
  }

  export interface ParentProps extends QCardActionsProps {}

  export interface Props extends ParentProps {}

  export interface Slots extends QCardActionsSlots {}
}
