import type { QCardSectionProps, QCardSectionSlots } from "quasar";
import type { GlobalComponent } from "./api";

export interface CardSectionOwnProps {}

export type CardSectionParentProps = QCardSectionProps;

export interface CardSectionProps
  extends CardSectionParentProps,
    CardSectionOwnProps {}

export type CardSectionSlots = QCardSectionSlots;

export type GlobalCardSection = GlobalComponent<
  CardSectionProps,
  CardSectionSlots
>;
