import type { GlobalComponent } from "./api";
import type { BaseButtonProps, BaseButtonSlots } from "./BaseButton.extras";

export type FormButtonParentProps = BaseButtonProps;

export interface FormButtonOwnProps {}

export interface FormButtonProps
  extends FormButtonParentProps,
    FormButtonOwnProps {}

export type FormButtonSlots = BaseButtonSlots;

export type GlobalFormButton = GlobalComponent<
  FormButtonProps,
  FormButtonSlots
>;
