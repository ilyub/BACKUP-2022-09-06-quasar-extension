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

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnProps {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps
    extends Omit<QCardActionsProps, keyof OwnProps> {}

  export interface ParentSlots
    extends Omit<QCardActionsSlots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
