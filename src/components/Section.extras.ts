import type { GlobalComponent } from "./api";
import type { SwitchableProps, SwitchableSlots } from "./Switchable.extras";

export type GlobalSection = GlobalComponent<SectionProps, SectionSlots>;

export type SectionParentProps = SwitchableProps;

export interface SectionOwnProps {}

export interface SectionProps extends SectionParentProps, SectionOwnProps {}

export type SectionSlots = SwitchableSlots;
