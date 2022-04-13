import type { SwitchableProps, SwitchableSlots } from "./Switchable.extras";
import type { GlobalComponent } from "./api";

export type GlobalSection = GlobalComponent<SectionProps, SectionSlots>;

export interface SectionOwnProps {}

export type SectionParentProps = SwitchableProps;

export interface SectionProps extends SectionParentProps, SectionOwnProps {}

export type SectionSlots = SwitchableSlots;
