import type { GlobalComponent } from "./api";
import type { booleanU } from "@skylib/functions";
import type { QToggleProps, QToggleSlots } from "quasar";

export type GlobalToggle = GlobalComponent<ToggleProps, ToggleSlots>;

export interface ToggleOwnProps {
  readonly disable?: booleanU;
  readonly modelValue: boolean;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: (value: boolean) => void;
}

export interface ToggleParentProps
  extends Omit<
    QToggleProps,
    "disable" | "modelValue" | "onUpdate:modelValue"
  > {}

export interface ToggleProps extends ToggleParentProps, ToggleOwnProps {}

export type ToggleSlots = QToggleSlots;
