import { lang as baseLang } from "@skylib/facades";
import type { GlobalComponent, VNodes, plugins } from "./api";
import type { lang } from "@skylib/facades";
import type { booleanU, stringU } from "@skylib/functions";
import type { QField, QFieldProps, QFieldSlots } from "quasar";

export namespace Field {
  export const lang: baseLang.Lang<never, never> = baseLang;

  export interface ControlSlotData<T = unknown> {
    /**
     * Emits value.
     *
     * @param value - Value.
     */
    readonly emitValue: (value: T) => void;
    readonly modelValue: T;
    // eslint-disable-next-line @skylib/optional-property-style -- Ok
    readonly placeholder: stringU;
  }

  export interface Global<T = unknown>
    extends GlobalComponent<Props<T>, Slots<T>> {
    readonly main: QField;
  }

  export interface OwnProps<T = unknown> {
    readonly disable?: booleanU;
    readonly focusableElement?: HTMLElement | undefined;
    readonly label?: lang.Transform<lang.Word> | undefined;
    readonly modelValue: T;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: T) => void;
    readonly placeholder?: stringU;
    readonly required?: booleanU;
    readonly validationOptions?:
      | plugins.useValidation.OptionsProp<T>
      | undefined;
  }

  export interface OwnSlots<T = unknown> {
    /**
     * Control slot.
     *
     * @param scope - Scope.
     * @returns Nodes.
     */
    readonly control: (scope: ControlSlotData<T>) => VNodes;
  }

  export interface ParentProps<T = unknown>
    extends Omit<QFieldProps, keyof OwnProps>,
      Omit<plugins.useValidation.Props<T>, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QFieldSlots, keyof OwnSlots> {}

  export interface Props<T = unknown> extends ParentProps<T>, OwnProps<T> {}

  export interface Slots<T = unknown> extends ParentSlots, OwnSlots<T> {}
}
