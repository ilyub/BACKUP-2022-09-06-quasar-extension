import type { QOptionGroupProps } from "quasar";

import * as is from "@skylib/functions/es/guards";

import type { PropOptionsRequired, PropsToPropOptions } from "./api";

export interface OptionGroupOption<T = unknown> {
  readonly disable?: boolean;
  readonly label: string;
  readonly value: T;
}

export type OptionGroupOptions<T = unknown> = ReadonlyArray<
  OptionGroupOption<T>
>;

export type OptionGroupPropOptions = PropsToPropOptions<
  QOptionGroupProps,
  {
    readonly modelValue: PropOptionsRequired<unknown>;
    readonly options: PropOptionsRequired<OptionGroupOptions>;
  }
>;

export const isOptionGroupOption: is.Guard<OptionGroupOption> = is.factory(
  is.object.of,
  { label: is.string, value: is.unknown },
  { disable: is.boolean }
);

export const isOptionGroupOptions = is.factory(
  is.array.of,
  isOptionGroupOption
);
