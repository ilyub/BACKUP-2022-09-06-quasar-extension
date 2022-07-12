/* eslint-disable @skylib/primary-export-only -- Ok */

import type { PropType } from "vue";
import type { is } from "@skylib/functions";

export interface PropOptions<T> {
  readonly default?: T;
  readonly required?: boolean;
  readonly type?: PropType<T>;
  readonly validator?: is.Guard<T>;
}

export interface PropOptionsBoolean extends PropOptionsDefault<boolean> {}

export interface PropOptionsDefault<T> extends PropOptions<T> {
  readonly default: T;
}

export interface PropOptionsRequired<T> extends PropOptions<T> {
  readonly required: true;
}
