import { icons as baseIcons } from "@skylib/facades";
import type { booleanU, numberU } from "@skylib/functions";
import type { QFieldProps, QFieldSlots } from "quasar";
import type { GlobalComponent } from "./api";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends ModuleIcons {}
    }
  }
}

export const icons: baseIcons.Icons<keyof ModuleIcons> = baseIcons;

export type GlobalNumericInput = GlobalComponent<
  NumericInputProps,
  NumericInputSlots
>;

export interface ModuleIcons {
  readonly chevronDoubleLeft: true;
  readonly chevronDoubleRight: true;
  readonly chevronLeft: true;
  readonly chevronRight: true;
}

export interface NumericInputOwnProps {
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

export interface NumericInputParentProps
  extends Omit<QFieldProps, "modelValue" | "onUpdate:modelValue"> {}

export interface NumericInputProps
  extends NumericInputParentProps,
    NumericInputOwnProps {}

export type NumericInputSlots = QFieldSlots;
