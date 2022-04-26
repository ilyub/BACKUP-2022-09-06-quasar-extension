import type { GlobalComponent } from "./api";
import type { booleanU, stringU } from "@skylib/functions";
import type { QInputProps, QInputSlots } from "quasar";

export type GlobalInput = GlobalComponent<InputProps, InputSlots>;

export interface InputOwnProps {
  readonly disable?: booleanU;
  readonly modelValue?: stringU;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: (value: stringU) => void;
}

export interface InputParentProps
  extends Omit<QInputProps, "disable" | "modelValue" | "onUpdate:modelValue"> {}

export interface InputProps extends InputParentProps, InputOwnProps {}

export type InputSlots = QInputSlots;
