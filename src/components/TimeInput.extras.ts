import { icons as baseIcons } from "@skylib/facades";
import type { GlobalComponent } from "./api";
import type { numberU } from "@skylib/functions";
import type { QFieldProps, QFieldSlots } from "quasar";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends ModuleIcons {}
    }
  }
}

export const icons: baseIcons.Icons<keyof ModuleIcons> = baseIcons;

export type GlobalTimeInput = GlobalComponent<TimeInputProps, TimeInputSlots>;

export interface ModuleIcons {
  readonly chevronDoubleLeft: true;
  readonly chevronDoubleRight: true;
  readonly chevronLeft: true;
  readonly chevronRight: true;
}

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
