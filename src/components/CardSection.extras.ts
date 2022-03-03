import type { QCardSectionProps, QCardSectionSlots } from "quasar";

import type { GlobalComponent } from "./api";

export type CardSectionParentProps = QCardSectionProps;

export interface CardSectionOwnProps {}

export interface CardSectionProps
  extends CardSectionParentProps,
    CardSectionOwnProps {}

export type CardSectionSlots = QCardSectionSlots;

export type GlobalCardSection = GlobalComponent<
  CardSectionProps,
  CardSectionSlots
>;
