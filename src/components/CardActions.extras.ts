import type { QCardActionsProps, QCardActionsSlots } from "quasar";
import type { GlobalComponent } from "./api";

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
