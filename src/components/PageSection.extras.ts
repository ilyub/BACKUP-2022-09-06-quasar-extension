import type { GlobalComponentConstructor } from "quasar";

import type { SwitchableProps, SwitchableSlots } from "./Switchable.extras";

export type GlobalPageSection = GlobalComponentConstructor<
  PageSectionProps,
  PageSectionSlots
>;

export type PageSectionParentProps = SwitchableProps;

export interface PageSectionOwnerProps {}

export interface PageSectionProps
  extends PageSectionParentProps,
    PageSectionOwnerProps {}

export type PageSectionSlots = SwitchableSlots;
