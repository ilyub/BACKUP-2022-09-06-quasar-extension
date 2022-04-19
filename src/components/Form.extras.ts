import type { handlePromise } from "@skylib/facades";
import type { QFormProps, QFormSlots } from "quasar";
import type { GlobalComponent } from "./api";

export interface FormOwnProps {
  readonly asyncTaskType?: handlePromise.Type | undefined;
  readonly onSubmit?: OnSubmit | undefined;
  readonly onSubmitAsync?: OnSubmitAsync | undefined;
}

export interface FormParentProps extends Omit<QFormProps, "onSubmit"> {}

export interface FormProps extends FormParentProps, FormOwnProps {}

export type FormSlots = Readonly<QFormSlots>;

export type GlobalForm = GlobalComponent<FormProps, FormSlots>;

export interface OnSubmit {
  /**
   * Form submission event.
   *
   * @param evt - DOM event.
   */
  (evt: Event | SubmitEvent): void;
}

export interface OnSubmitAsync {
  /**
   * Form submission event.
   *
   * @param evt - DOM event.
   */
  (evt: Event | SubmitEvent): Promise<void>;
}
