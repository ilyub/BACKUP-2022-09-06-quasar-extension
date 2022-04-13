import type { QOptionGroupProps, QOptionGroupSlots } from "quasar";
import type { GlobalComponent } from "./api";

export type GlobalOptionGroup<T = unknown> = GlobalComponent<
  OptionGroupProps<T>,
  OptionGroupSlots
>;

export interface OptionGroupOption<T = unknown> {
  readonly disable?: boolean;
  readonly label: string;
  readonly value: T;
}

export type OptionGroupOptions<T = unknown> = ReadonlyArray<
  OptionGroupOption<T>
>;

export interface OptionGroupOwnProps<T = unknown> {
  readonly inline?: boolean;
  readonly modelValue: T;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: (value: T) => void;
  readonly options: OptionGroupOptions<T>;
}

export interface OptionGroupParentProps
  extends Omit<
    QOptionGroupProps,
    "inline" | "modelValue" | "onUpdate:modelValue" | "options"
  > {}

export interface OptionGroupProps<T = unknown>
  extends OptionGroupParentProps,
    OptionGroupOwnProps<T> {}

export type OptionGroupSlots = QOptionGroupSlots;
