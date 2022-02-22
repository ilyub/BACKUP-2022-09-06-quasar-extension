import type { GlobalComponentConstructor } from "quasar";

import type { BaseButtonProps, BaseButtonSlots } from "./BaseButton.extras";

export type FormButtonParentProps = BaseButtonProps;

export interface FormButtonOwnProps {}

export interface FormButtonProps
  extends FormButtonParentProps,
    FormButtonOwnProps {}

export type FormButtonSlots = BaseButtonSlots;

export type GlobalFormButton = GlobalComponentConstructor<
  FormButtonProps,
  FormButtonSlots
>;
