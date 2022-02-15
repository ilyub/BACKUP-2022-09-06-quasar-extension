import type { GlobalComponentConstructor } from "quasar";

import type { BaseButtonProps, BaseButtonSlots } from "./BaseButton.extras";

export type ButtonParentProps = BaseButtonProps;

export interface ButtonOwnProps {}

export interface ButtonProps extends ButtonParentProps, ButtonOwnProps {}

export type ButtonSlots = BaseButtonSlots;

export type GlobalButton = GlobalComponentConstructor<ButtonProps, ButtonSlots>;
