import type { BaseButtonProps, BaseButtonSlots } from "./BaseButton.extras";
import type { GlobalComponent } from "./api";

export type GlobalIconButton = GlobalComponent<
  IconButtonProps,
  IconButtonSlots
>;

export interface IconButtonOwnProps {}

export type IconButtonParentProps = BaseButtonProps;

export interface IconButtonProps
  extends IconButtonParentProps,
    IconButtonOwnProps {}

export type IconButtonSlots = BaseButtonSlots;
