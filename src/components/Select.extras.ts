import type { QSelectProps } from "quasar";

import * as is from "@skylib/functions/es/guards";

import type { ExtendQuasarProps, PropOptionsRequired } from "./api";

export interface SelectOption<T = unknown> {
  readonly disable?: boolean;
  readonly label: string;
  readonly value: T;
}

export type SelectOptions<T = unknown> = ReadonlyArray<SelectOption<T>>;

export type SelectProps = ExtendQuasarProps<
  QSelectProps,
  {
    readonly modelValue: PropOptionsRequired<unknown>;
    readonly options: PropOptionsRequired<SelectOptions>;
  }
>;

export const isSelectOption: is.Guard<SelectOption> = is.factory(
  is.object.of,
  { label: is.string, value: is.unknown },
  { disable: is.boolean }
);

export const isSelectOptions = is.factory(is.array.of, isSelectOption);
