import type { InjectionKey, PropType } from "vue";
import { inject } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import type * as is from "@skylib/functions/es/guards";

// eslint-disable-next-line @skylib/prefer-readonly
export interface PropOptions<T> {
  readonly default?: T;
  readonly required?: true;
  readonly type?: PropType<T>;
  readonly validator?: is.Guard<T>;
}

// eslint-disable-next-line @skylib/prefer-readonly
export interface PropOptionsDefault<T> extends PropOptions<T> {
  readonly default: T;
}

// eslint-disable-next-line @skylib/prefer-readonly
export interface PropOptionsRequired<T> extends PropOptions<T> {
  readonly required: true;
}

/**
 * Injects required value.
 *
 * @param key - Key.
 * @returns Value.
 */
export function injectRequire<T>(key: string | InjectionKey<T>): T {
  const result = inject(key);

  assert.not.empty(result);

  return result;
}

/**
 * Creates Vue property.
 *
 * @param validator - Validator.
 * @returns Vue property.
 */
export function propOptions<T>(validator: is.Guard<T>): PropOptions<T> {
  return { validator };
}

/**
 * Creates Vue property.
 *
 * @param defVal - Default value.
 * @returns Vue property.
 */
export function propOptionsBoolean(
  defVal = false
): PropOptionsDefault<boolean> {
  return { default: defVal, type: Boolean };
}

propOptions.boolean = propOptionsBoolean;

/**
 * Creates Vue property.
 *
 * @returns Vue property.
 */
export function propOptionsBooleanU(): PropOptions<boolean> {
  return { type: Boolean };
}

propOptions.booleanU = propOptionsBooleanU;

/**
 * Creates Vue property.
 *
 * @param validator - Validator.
 * @param defVal - Default value.
 * @returns Vue property.
 */
export function propOptionsDefault<T>(
  validator: is.Guard<T>,
  defVal: T
): PropOptionsDefault<T> {
  return { default: defVal, validator };
}

propOptions.default = propOptionsDefault;

/**
 * Creates Vue property.
 *
 * @param validator - Validator.
 * @returns Vue property.
 */
export function propOptionsRequired<T>(
  validator: is.Guard<T>
): PropOptionsRequired<T> {
  return { required: true, validator };
}

propOptions.required = propOptionsRequired;
