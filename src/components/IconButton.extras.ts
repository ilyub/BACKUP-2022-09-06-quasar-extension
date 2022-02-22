import type { GlobalComponentConstructor } from "quasar";

import type { BaseButtonProps, BaseButtonSlots } from "./BaseButton.extras";

export type GlobalIconButton = GlobalComponentConstructor<
  IconButtonProps,
  IconButtonSlots
>;

export type IconButtonParentProps = BaseButtonProps;

export interface IconButtonOwnProps {}

export interface IconButtonProps
  extends IconButtonParentProps,
    IconButtonOwnProps {}

export type IconButtonSlots = BaseButtonSlots;
