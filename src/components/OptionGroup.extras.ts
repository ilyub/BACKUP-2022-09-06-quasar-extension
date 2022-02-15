import type { GlobalComponentConstructor, QOptionGroupProps } from "quasar";

import * as is from "@skylib/functions/es/guards";

import type { ReadonlyOmit } from "./api";

export type GlobalOptionGroup = GlobalComponentConstructor<
  OptionGroupProps,
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

export type OptionGroupParentProps = ReadonlyOmit<
  QOptionGroupProps,
  "inline" | "modelValue" | "options"
>;

export interface OptionGroupOwnProps<T = unknown> {
  readonly inline?: boolean;
  readonly modelValue: unknown;
  readonly options: OptionGroupOptions<T>;
}

export interface OptionGroupProps<T = unknown>
  extends OptionGroupParentProps,
    OptionGroupOwnProps<T> {}

// eslint-disable-next-line @skylib/prefer-readonly
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
