import type { QFieldProps, QFieldSlots } from "quasar";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { booleanU, numberU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";

declare global {
  namespace facades {
    namespace icons {
      interface Facade extends ModuleIcons {}
    }
  }
}

export interface ModuleIcons {
  readonly chevronDoubleLeft: string;
  readonly chevronDoubleRight: string;
  readonly chevronLeft: string;
  readonly chevronRight: string;
}

export type GlobalNumericInput = GlobalComponent<
  NumericInputProps,
  NumericInputSlots
>;

export interface NumericInputParentProps
  extends Omit<QFieldProps, "modelValue" | "onUpdate:modelValue"> {}

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

export interface NumericInputProps
  extends NumericInputParentProps,
    NumericInputOwnProps {}

export type NumericInputSlots = QFieldSlots;

export const icons: Icons<keyof ModuleIcons> = baseIcons;
