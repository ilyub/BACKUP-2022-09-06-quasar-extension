import type {
  GlobalComponentConstructor,
  QInputProps,
  QInputSlots
} from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

export type GlobalInput = GlobalComponentConstructor<InputProps, InputSlots>;

export interface InputParentProps extends Omit<QInputProps, "modelValue"> {}

export interface InputOwnProps {
  readonly modelValue?: stringU;
}

export interface InputProps extends InputParentProps, InputOwnProps {}

export type InputSlots = QInputSlots;
