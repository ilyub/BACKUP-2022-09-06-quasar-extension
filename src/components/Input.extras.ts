import type {
  GlobalComponentConstructor,
  QInputProps,
  QInputSlots
} from "quasar";

import type { booleanU, stringU } from "@skylib/functions/es/types/core";

export type GlobalInput = GlobalComponentConstructor<InputProps, InputSlots>;

export interface InputOwnProps {
  readonly disable?: booleanU;
  readonly modelValue?: stringU;
}

export interface InputParentProps
  extends Omit<QInputProps, "disable" | "modelValue"> {}

export interface InputProps extends InputParentProps, InputOwnProps {}

export type InputSlots = QInputSlots;
