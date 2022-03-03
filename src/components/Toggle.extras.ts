import type { QToggleProps, QToggleSlots } from "quasar";

import type { GlobalComponent } from "./api";

export type GlobalToggle = GlobalComponent<ToggleProps, ToggleSlots>;

export interface ToggleParentProps
  extends Omit<
    QToggleProps,
    "disable" | "modelValue" | "onUpdate:modelValue"
  > {}

export interface ToggleOwnProps {
  readonly disable?: boolean;
  readonly modelValue: boolean;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: (value: boolean) => void;
}

export interface ToggleProps extends ToggleParentProps, ToggleOwnProps {}

export type ToggleSlots = QToggleSlots;
