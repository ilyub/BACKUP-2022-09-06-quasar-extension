import type { QFormProps, QFormSlots } from "quasar";

import type { TaskType } from "@skylib/facades/es/handlePromise";
import * as is from "@skylib/functions/es/guards";

import type { GlobalComponent } from "./api";

export interface FormOwnProps {
  readonly asyncTaskType?: TaskType | undefined;
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

export const isOnSubmit: is.Guard<OnSubmit> = is.callable;

export const isOnSubmitU: is.Guard<OnSubmit | undefined> = is.callableU;

export const isOnSubmitAsync: is.Guard<OnSubmitAsync> = is.callable;

export const isOnSubmitAsyncU: is.Guard<OnSubmitAsync | undefined> =
  is.callableU;
