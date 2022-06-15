/* eslint-disable @skylib/primary-export-only -- Ok */

import type { is } from "@skylib/functions";
import type { PropType } from "vue";

export interface PropOptions<T> {
  readonly default?: T;
  readonly required?: true;
  readonly type?: PropType<T>;
  readonly validator?: is.Guard<T>;
}

export interface PropOptionsBoolean extends PropOptionsDefault<boolean> {}

export interface PropOptionsDefault<T>
  extends PropOptions<Exclude<T, undefined>> {
  readonly default: Exclude<T, undefined>;
}

export interface PropOptionsRequired<T> extends PropOptions<T> {
  readonly required: true;
}
