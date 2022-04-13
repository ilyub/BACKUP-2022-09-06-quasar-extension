import type { BaseButtonProps, BaseButtonSlots } from "./BaseButton.extras";
import type { GlobalComponent } from "./api";

export interface FormButtonOwnProps {}

export type FormButtonParentProps = BaseButtonProps;

export interface FormButtonProps
  extends FormButtonParentProps,
    FormButtonOwnProps {}

export type FormButtonSlots = BaseButtonSlots;

export type GlobalFormButton = GlobalComponent<
  FormButtonProps,
  FormButtonSlots
>;
