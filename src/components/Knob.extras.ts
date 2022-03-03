import type { QKnobProps, QKnobSlots } from "quasar";

import type { booleanU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";

export type GlobalKnob = GlobalComponent<KnobOwnProps, KnobSlots>;

export interface KnobParentProps
  extends Omit<QKnobProps, "disable" | "modelValue" | "onUpdate:modelValue"> {}

export interface KnobOwnProps {
  readonly disable?: booleanU;
  readonly inline?: booleanU;
  readonly modelValue: number;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: (value: number) => void;
}

export interface KnobProps extends KnobParentProps, KnobOwnProps {}

export type KnobSlots = QKnobSlots;
