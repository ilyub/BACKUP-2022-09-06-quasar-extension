import { icons as baseIcons, lang as baseLang } from "@skylib/facades";
import type { GlobalComponent, plugins, VNodes } from "./api";
import type { booleanU, numberU, stringU } from "@skylib/functions";
import type { QField, QFieldProps, QFieldSlots } from "quasar";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends NumericInput.Icon {}
    }
  }
}

export namespace NumericInput {
  export const icons: baseIcons.Icons<keyof Icon> = baseIcons;

  export const lang: baseLang.Lang<never, never> = baseLang;

  export interface ControlSlotData {
    /**
     * Triggers change.
     */
    readonly change: () => void;
    /**
     * Emits value.
     *
     * @param value - Value.
     */
    readonly emitValue: (value: unknown) => void;
    readonly modelValue: unknown;
    readonly placeholder: string;
  }

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QField;
  }

  export interface Icon {
    readonly chevronDoubleLeft: true;
    readonly chevronDoubleRight: true;
    readonly chevronLeft: true;
    readonly chevronRight: true;
  }

  export interface OwnProps {
    readonly bigStep?: numberU;
    readonly label?: stringU;
    readonly max?: numberU;
    readonly min?: numberU;
    readonly modelValue?: numberU;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: numberU) => void;
    readonly placeholder?: stringU;
    readonly required?: booleanU;
    readonly smallStep?: numberU;
  }

  export interface OwnSlots {
    /**
     * Control slot.
     *
     * @param scope - Scope.
     * @returns Nodes.
     */
    readonly control: (scope: ControlSlotData) => VNodes;
  }

  export interface ParentProps
    extends Omit<QFieldProps, keyof OwnProps>,
      plugins.useValidation.Props<numberU> {}

  export interface ParentSlots extends Omit<QFieldSlots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
