import type { GlobalComponent } from "./api";
import type { QCardActionsProps, QCardActionsSlots } from "quasar";

export interface CardActionsOwnProps {}

export type CardActionsParentProps = QCardActionsProps;

export interface CardActionsProps
  extends CardActionsParentProps,
    CardActionsOwnProps {}

export type CardActionsSlots = QCardActionsSlots;

export type GlobalCardActions = GlobalComponent<
  CardActionsProps,
  CardActionsSlots
>;
