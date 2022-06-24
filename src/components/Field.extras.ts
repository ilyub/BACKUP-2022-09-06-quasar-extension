import { lang as baseLang } from "@skylib/facades";
import type { GlobalComponent, VNodes, plugins } from "./api";
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
    readonly emitValue: (value: unknown) => void;
    readonly modelValue: T;
    // eslint-disable-next-line @skylib/optional-property-style -- Ok
    readonly placeholder: stringU;
  }

  export interface Format<T> {
    /**
     * Formats value.
     *
     * @param value - Value.
     * @returns Formatted value.
     */
    (value: unknown): T;
  }

  export interface Global<T = unknown>
    extends GlobalComponent<Props<T>, Slots<T>> {
    readonly main?: QField;
  }

  export interface OwnProps<T = unknown> {
    readonly disable?: booleanU;
    readonly focusableElement?: HTMLElement | undefined;
    /**
     * Formats value.
     *
     * @param value - Value.
     * @returns Formatted value.
     */
    readonly format?: Format<T> | undefined;
    readonly modelValue: T;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: T) => void;
    readonly required?: booleanU;
    readonly validationOptions?: plugins.validation.OptionsProp<T> | undefined;
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

  export interface ParentProps
    extends Omit<
      QFieldProps,
      | keyof OwnProps
      | keyof PluginProps
      | "lazyRules"
      | "reactiveRules"
      | "rules"
    > {}

  export interface ParentSlots extends Omit<QFieldSlots, keyof OwnSlots> {}

  export interface PluginProps<T = unknown>
    extends plugins.langProps.Props<"label" | "placeholder">,
      plugins.validation.Props<T> {}

  export interface Props<T = unknown>
    extends ParentProps,
      PluginProps<T>,
      OwnProps<T> {}

  export interface Slots<T = unknown> extends ParentSlots, OwnSlots<T> {}
}
