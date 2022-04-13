import type { BaseButtonProps, BaseButtonSlots } from "./BaseButton.extras";
import type { GlobalComponent } from "./api";

export interface ButtonOwnProps {}

export type ButtonParentProps = BaseButtonProps;

export interface ButtonProps extends ButtonParentProps, ButtonOwnProps {}

export type ButtonSlots = BaseButtonSlots;

export type GlobalButton = GlobalComponent<ButtonProps, ButtonSlots>;
