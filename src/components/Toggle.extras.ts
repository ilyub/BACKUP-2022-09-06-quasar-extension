import type {
  GlobalComponentConstructor,
  QToggleProps,
  QToggleSlots
} from "quasar";

import type { ReadonlyOmit } from "./api";

export type GlobalToggle = GlobalComponentConstructor<ToggleProps, ToggleSlots>;

export type ToggleParentProps = ReadonlyOmit<
  QToggleProps,
  "disable" | "modelValue"
>;

export interface ToggleOwnProps {
  readonly disable?: boolean;
  readonly modelValue: boolean;
}

export interface ToggleProps extends ToggleParentProps, ToggleOwnProps {}

export type ToggleSlots = QToggleSlots;
