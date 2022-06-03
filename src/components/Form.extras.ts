import type { GlobalComponent } from "./api";
import type { handlePromise } from "@skylib/facades";
import type { QForm, QFormProps, QFormSlots } from "quasar";

export namespace Form {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QForm;
    /**
     * Resets validation.
     */
    readonly resetValidation: () => void;
  }

  export interface OwnProps {
    readonly asyncTaskType?: handlePromise.Type | undefined;
    /**
     * Form submission event.
     *
     * @param event - DOM event.
     */
    readonly onSubmit?: (event: Event) => void;
    /**
     * Form submission event.
     *
     * @param event - DOM event.
     * @returns Promise.
     */
    readonly onSubmitAsync?: (event: Event) => Promise<void>;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps extends Omit<QFormProps, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QFormSlots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
