import type { GlobalComponentConstructor } from "quasar";

import type { SwitchableProps, SwitchableSlots } from "./Switchable.extras";

export type GlobalSubsection = GlobalComponentConstructor<
  SubsectionProps,
  SubsectionSlots
>;

export type SubsectionParentProps = SwitchableProps;

export interface SubsectionOwnerProps {}

export interface SubsectionProps
  extends SubsectionParentProps,
    SubsectionOwnerProps {}

export type SubsectionSlots = SwitchableSlots;
