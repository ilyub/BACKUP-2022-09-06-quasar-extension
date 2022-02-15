import type { GlobalComponentConstructor } from "quasar";

import type { SwitchableProps, SwitchableSlots } from "./Switchable.extras";

export type GlobalSection = GlobalComponentConstructor<
  SectionProps,
  SectionSlots
>;

export type SectionParentProps = SwitchableProps;

export interface SectionOwnProps {}

export interface SectionProps extends SectionParentProps, SectionOwnProps {}

export type SectionSlots = SwitchableSlots;
