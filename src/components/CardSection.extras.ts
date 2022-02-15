import type {
  GlobalComponentConstructor,
  QCardSectionProps,
  QCardSectionSlots
} from "quasar";

// eslint-disable-next-line @skylib/prefer-readonly
export type CardSectionParentProps = QCardSectionProps;

export interface CardSectionOwnProps {}

export interface CardSectionProps
  extends CardSectionParentProps,
    CardSectionOwnProps {}

// eslint-disable-next-line @skylib/prefer-readonly
export type CardSectionSlots = QCardSectionSlots;

export type GlobalCardSection = GlobalComponentConstructor<
  CardSectionProps,
  CardSectionSlots
>;
