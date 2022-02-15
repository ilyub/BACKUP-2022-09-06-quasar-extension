import type {
  GlobalComponentConstructor,
  QInputProps,
  QInputSlots
} from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

import type { ReadonlyOmit } from "./api";

export type GlobalInput = GlobalComponentConstructor<InputProps, InputSlots>;

// eslint-disable-next-line @skylib/prefer-readonly
export type InputParentProps = ReadonlyOmit<QInputProps, "modelValue">;

export interface InputOwnProps {
  readonly modelValue?: stringU;
}

export interface InputProps extends InputParentProps, InputOwnProps {}

export type InputSlots = QInputSlots;
