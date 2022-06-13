import { injectable } from "./api";
import { computed } from "vue";
import type { GlobalComponent } from "./api";
import type { handlePromise } from "@skylib/facades";
import type { QForm, QFormProps, QFormSlots } from "quasar";
import type { ComputedRef } from "vue";

export namespace Form {
  export const { inject: injectForm, provide: provideForm } =
    injectable<ExposeToChildren>({ submitting: computed(() => false) });

  export interface AsyncSubmit {
    /**
     * Form submission event.
     *
     * @param event - DOM event.
     */
    (event: Event): Promise<void>;
  }

  export interface ExposeToChildren {
    readonly submitting: ComputedRef<boolean>;
  }

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: QForm;
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
