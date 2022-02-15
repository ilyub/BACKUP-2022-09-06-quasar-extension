import type {
  GlobalComponentConstructor,
  QCardActionsProps,
  QCardActionsSlots
} from "quasar";

export type CardActionsParentProps = QCardActionsProps;

export interface CardActionsOwnProps {}

export interface CardActionsProps
  extends CardActionsParentProps,
    CardActionsOwnProps {}

// eslint-disable-next-line @skylib/prefer-readonly
export type CardActionsSlots = QCardActionsSlots;

export type GlobalCardActions = GlobalComponentConstructor<
  CardActionsProps,
  CardActionsSlots
>;
