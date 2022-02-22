import type {
  GlobalComponentConstructor,
  QCardSectionProps,
  QCardSectionSlots
} from "quasar";

export type CardSectionParentProps = QCardSectionProps;

export interface CardSectionOwnProps {}

export interface CardSectionProps
  extends CardSectionParentProps,
    CardSectionOwnProps {}

export type CardSectionSlots = QCardSectionSlots;

export type GlobalCardSection = GlobalComponentConstructor<
  CardSectionProps,
  CardSectionSlots
>;
