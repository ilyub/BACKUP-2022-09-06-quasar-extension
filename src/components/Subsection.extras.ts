import type { GlobalComponent } from "./api";
import type { SwitchableProps, SwitchableSlots } from "./Switchable.extras";

export type GlobalSubsection = GlobalComponent<
  SubsectionProps,
  SubsectionSlots
>;

export interface SubsectionOwnProps {}

export type SubsectionParentProps = SwitchableProps;

export interface SubsectionProps
  extends SubsectionParentProps,
    SubsectionOwnProps {}

export type SubsectionSlots = SwitchableSlots;
