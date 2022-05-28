import { icons as baseIcons } from "@skylib/facades";
import type { GlobalComponent, plugins, VNodes } from "./api";
import type { booleanU, numberU, NumStrE } from "@skylib/functions";
import type { QFieldProps, QFieldSlots } from "quasar";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends NumericInput.Icon {}
    }
  }
}

export namespace NumericInput {
  export const icons: baseIcons.Icons<keyof Icon> = baseIcons;

  export interface ControlSlotData {
    /**
     * Emits value.
     *
     * @param value - Value.
     */
    readonly emitValue: (value: NumStrE) => void;
  }

  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface Icon {
    readonly chevronDoubleLeft: true;
    readonly chevronDoubleRight: true;
    readonly chevronLeft: true;
    readonly chevronRight: true;
  }

  export interface OwnProps extends plugins.useValidation.Props<numberU> {
    readonly bigStep?: numberU;
    readonly max?: numberU;
    readonly min?: numberU;
    readonly modelValue?: numberU;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: numberU) => void;
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

  export interface ParentProps extends Omit<QFieldProps, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QFieldSlots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
