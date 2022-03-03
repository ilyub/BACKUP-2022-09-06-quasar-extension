import type { GlobalComponent } from "./api";
import type { BaseButtonProps, BaseButtonSlots } from "./BaseButton.extras";

export type GlobalIconButton = GlobalComponent<
  IconButtonProps,
  IconButtonSlots
>;

export type IconButtonParentProps = BaseButtonProps;

export interface IconButtonOwnProps {}

export interface IconButtonProps
  extends IconButtonParentProps,
    IconButtonOwnProps {}

export type IconButtonSlots = BaseButtonSlots;
