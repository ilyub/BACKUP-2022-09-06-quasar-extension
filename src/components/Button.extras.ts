import type { GlobalComponent } from "./api";
import type { BaseButtonProps, BaseButtonSlots } from "./BaseButton.extras";

export type ButtonParentProps = BaseButtonProps;

export interface ButtonOwnProps {}

export interface ButtonProps extends ButtonParentProps, ButtonOwnProps {}

export type ButtonSlots = BaseButtonSlots;

export type GlobalButton = GlobalComponent<ButtonProps, ButtonSlots>;
