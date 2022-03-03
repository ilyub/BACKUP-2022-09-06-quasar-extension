import type { QCardActionsProps, QCardActionsSlots } from "quasar";

import type { GlobalComponent } from "./api";

export type CardActionsParentProps = QCardActionsProps;

export interface CardActionsOwnProps {}

export interface CardActionsProps
  extends CardActionsParentProps,
    CardActionsOwnProps {}

export type CardActionsSlots = QCardActionsSlots;

export type GlobalCardActions = GlobalComponent<
  CardActionsProps,
  CardActionsSlots
>;
