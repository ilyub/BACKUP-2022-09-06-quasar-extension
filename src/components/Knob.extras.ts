import type { GlobalComponent } from "./api";
import type { booleanU } from "@skylib/functions";
import type { QKnobProps, QKnobSlots } from "quasar";

export type GlobalKnob = GlobalComponent<KnobOwnProps, KnobSlots>;

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

export interface KnobParentProps
  extends Omit<QKnobProps, "disable" | "modelValue" | "onUpdate:modelValue"> {}

export interface KnobProps extends KnobParentProps, KnobOwnProps {}

export type KnobSlots = QKnobSlots;
