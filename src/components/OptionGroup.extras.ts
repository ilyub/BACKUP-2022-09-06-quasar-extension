import type { GlobalComponentConstructor, QOptionGroupProps } from "quasar";

import * as is from "@skylib/functions/es/guards";

export type GlobalOptionGroup<T = unknown> = GlobalComponentConstructor<
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

export interface OptionGroupParentProps
  extends Omit<QOptionGroupProps, "inline" | "modelValue" | "options"> {}

export interface OptionGroupOwnProps<T = unknown> {
  readonly inline?: boolean;
  readonly modelValue: T;
  readonly options: OptionGroupOptions<T>;
}

export interface OptionGroupProps<T = unknown>
  extends OptionGroupParentProps,
    OptionGroupOwnProps<T> {}

export type OptionGroupSlots = QOptionGroupProps;

export const isOptionGroupOption: is.Guard<OptionGroupOption> = is.factory(
  is.object.of,
  { label: is.string, value: is.unknown },
  { disable: is.boolean }
);

export const isOptionGroupOptions = is.factory(
  is.array.of,
  isOptionGroupOption
);
