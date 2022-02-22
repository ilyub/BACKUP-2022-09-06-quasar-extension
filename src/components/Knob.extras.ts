import type {
  GlobalComponentConstructor,
  QKnobProps,
  QKnobSlots
} from "quasar";

import type { booleanU } from "@skylib/functions/es/types/core";

export type GlobalKnob = GlobalComponentConstructor<KnobOwnProps, KnobSlots>;

export interface KnobParentProps
  extends Omit<QKnobProps, "disable" | "modelValue"> {}

export interface KnobOwnProps {
  readonly disable?: booleanU;
  readonly inline?: booleanU;
  readonly modelValue: number;
}

export interface KnobProps extends KnobParentProps, KnobOwnProps {}

export type KnobSlots = QKnobSlots;
