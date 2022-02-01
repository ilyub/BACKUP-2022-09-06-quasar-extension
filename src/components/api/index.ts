import type { ComputedRef, InjectionKey, PropType } from "vue";
import { computed, inject, provide } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import type * as is from "@skylib/functions/es/guards";

export interface Injectable<T> {
  /**
   * Injects settings.
   *
   * @returns Settings.
   */
  readonly inject: () => ComputedRef<T>;
  /**
   * Provide settings.
   *
   * @param settings - Settings.
   */
  readonly provide: (settings: () => T) => void;
  /**
   * Provide settings.
   *
   * @param mutableProvide - Provide option.
   * @param settings - Settings.
   */
  readonly test: (mutableProvide: Record<symbol, unknown>, settings: T) => void;
}

export interface PropOptions<T> {
  readonly default?: T;
  readonly required?: true;
  readonly type?: PropType<T>;
  readonly validator?: is.Guard<T>;
}

export interface PropOptionsDefault<T> extends PropOptions<T> {
  readonly default: T;
}

export interface PropOptionsRequired<T> extends PropOptions<T> {
  readonly required: true;
}

export type PropsToPropOptions<T> = {
  readonly [K in keyof T]-?: PropOptions<T[K]>;
};

/**
 * Creates injectable.
 *
 * @param createDefault - Returns default value.
 * @returns Injectable.
 */
export function createInjectable<T>(createDefault?: () => T): Injectable<T> {
  const settingsId: InjectionKey<ComputedRef<T>> = Symbol("SettingsId");

  return {
    inject(): ComputedRef<T> {
      return createDefault
        ? inject(settingsId, computed<T>(createDefault))
        : injectRequire(settingsId);
    },
    provide(settings: () => T): void {
      provide(settingsId, computed<T>(settings));
    },
    test(mutableProvide: Record<symbol, unknown>, settings: T): void {
      mutableProvide[settingsId as symbol] = computed<T>(() => settings);
    }
  };
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
