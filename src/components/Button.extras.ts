import type { GlobalComponent } from "./api";
import type { BaseButtonProps, BaseButtonSlots } from "./BaseButton.extras";

export interface ButtonOwnProps {}

export type ButtonParentProps = BaseButtonProps;

export interface ButtonProps extends ButtonParentProps, ButtonOwnProps {}

export type ButtonSlots = BaseButtonSlots;

export type GlobalButton = GlobalComponent<ButtonProps, ButtonSlots>;
