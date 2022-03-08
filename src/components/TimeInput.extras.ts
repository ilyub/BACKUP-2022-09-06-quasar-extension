import type { QFieldProps, QFieldSlots } from "quasar";

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

export type GlobalTimeInput = GlobalComponent<TimeInputProps, TimeInputSlots>;

export interface TimeInputOwnProps {
  readonly modelValue?: numberU;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: (value: numberU) => void;
}

export interface TimeInputParentProps
  extends Omit<QFieldProps, "modelValue" | "onUpdate:modelValue"> {}

export interface TimeInputProps
  extends TimeInputParentProps,
    TimeInputOwnProps {}

export type TimeInputSlots = QFieldSlots;

export interface ModuleIcons {
  readonly chevronDoubleLeft: string;
  readonly chevronDoubleRight: string;
  readonly chevronLeft: string;
  readonly chevronRight: string;
}

export const icons: Icons<keyof ModuleIcons> = baseIcons;
