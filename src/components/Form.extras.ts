import type { GlobalComponent } from "./api";
import type { handlePromise } from "@skylib/facades";
import type { QForm, QFormProps, QFormSlots } from "quasar";

export namespace Form {
  export interface AsyncSubmit {
    /**
     * Form submission event.
     *
     * @param event - DOM event.
     */
    (event: Event): Promise<void>;
  }

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QForm;
    /**
     * Resets validation.
     */
    readonly resetValidation: () => void;
  }

  export interface OwnProps {
    readonly asyncTaskType?: handlePromise.Type | undefined;
    // eslint-disable-next-line @skylib/optional-property-style -- Ok
    readonly onAsyncSubmit?: AsyncSubmit | undefined;
    /**
     * Form submission event.
     *
     * @param event - DOM event.
     */
    readonly onSubmit?: (event: Event) => void;
  }

  export interface ParentProps extends Omit<QFormProps, keyof OwnProps> {}

  export interface ParentSlots extends QFormSlots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots {}
}
