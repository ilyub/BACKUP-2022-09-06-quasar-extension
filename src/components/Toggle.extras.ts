import type {
  GlobalComponentConstructor,
  QToggleProps,
  QToggleSlots
} from "quasar";

export type GlobalToggle = GlobalComponentConstructor<ToggleProps, ToggleSlots>;

export interface ToggleParentProps
  extends Omit<QToggleProps, "disable" | "modelValue"> {}

export interface ToggleOwnProps {
  readonly disable?: boolean;
  readonly modelValue: boolean;
}

export interface ToggleProps extends ToggleParentProps, ToggleOwnProps {}

export type ToggleSlots = QToggleSlots;
