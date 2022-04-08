import type { GlobalComponent } from "./api";
import type { SwitchableProps, SwitchableSlots } from "./Switchable.extras";

export type GlobalPageSection = GlobalComponent<
  PageSectionProps,
  PageSectionSlots
>;

export interface PageSectionOwnProps {}

export type PageSectionParentProps = SwitchableProps;

export interface PageSectionProps
  extends PageSectionParentProps,
    PageSectionOwnProps {}

export type PageSectionSlots = SwitchableSlots;
