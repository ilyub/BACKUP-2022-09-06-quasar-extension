import type { QInputProps, QInputSlots } from "quasar";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { numberU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";

declare global {
  namespace facades {
    namespace icons {
      interface Facade extends ModuleIcons {}
    }
  }
}

export interface ModuleIcons {
  readonly chevronLeftCircle: string;
  readonly chevronRightCircle: string;
}

export type GlobalNumericInput = GlobalComponent<
  NumericInputProps,
  NumericInputSlots
>;

export interface NumericInputParentProps
  extends Omit<QInputProps, "modelValue" | "onUpdate:modelValue"> {}

export interface NumericInputOwnProps {
  readonly max: number;
  readonly min?: numberU;
  readonly modelValue?: numberU;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: (value: numberU) => void;
}

export interface NumericInputProps
  extends NumericInputParentProps,
    NumericInputOwnProps {}

export type NumericInputSlots = QInputSlots;

export const icons: Icons<"chevronLeftCircle" | "chevronRightCircle"> =
  baseIcons;
