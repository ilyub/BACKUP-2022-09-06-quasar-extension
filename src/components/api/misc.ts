import { as, o } from "@skylib/functions";
import { computed, inject, provide, ref } from "vue";
import type {
  Emits,
  Injectable,
  InjectableSettings,
  PropOptions,
  PropOptionsBoolean,
  PropOptionsDefault,
  PropOptionsRequired,
  SetupEmit,
  SetupProps
} from "./core";
import type { unknowns, Join2, IndexedObject } from "@skylib/functions";
import type { PublicProps } from "quasar";
import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import type { ComputedRef, InjectionKey, Ref, VNode } from "vue";

/**
 * Creates Vue property.
 *
 * @returns Vue property.
 */
export const prop = o.extend(
  <T>(): PropOptions<T> => {
    return {};
  },
  {
    /**
     * Creates Vue property.
     *
     * @param defVal - Default value.
     * @returns Vue property.
     */
    boolean: (defVal = false): PropOptionsBoolean => {
      return { default: defVal, type: Boolean };
    },
    /**
     * Creates Vue property.
     *
     * @param defVal - Default value.
     * @returns Vue property.
     */
    default: <T>(defVal: Exclude<T, undefined>): PropOptionsDefault<T> => {
      return { default: defVal };
    },
    /**
     * Creates Vue property.
     *
     * @returns Vue property.
     */
    required: <T>(): PropOptionsRequired<T> => {
      return { required: true };
    }
  }
);

export interface GlobalComponent<P, S> {
  /**
   * Constructor.
   */
  new (): {
    $props: Emits & P & PublicProps;
    $slots: S;
  };
}

export type ParentProps<T extends object> = Join2<
  { readonly [K in OptionalKeys<T>]: PropOptions<T[K]> },
  { readonly [K in RequiredKeys<T>]: PropOptionsRequired<T[K]> }
>;

export type VNodes = readonly VNode[];

/**
 * Creates Vue ref compatible with non-public class methods.
 *
 * @param value - Value.
 * @returns Vue ref.
 */
export function classRef<T>(value: T): Ref<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return ref(value) as Ref<T>;
}

/**
 * Injects required value.
 *
 * @param key - Key.
 * @returns Value.
 */
// eslint-disable-next-line @skylib/prefer-readonly -- Ok
export function injectRequire<T>(key: InjectionKey<T> | string): T {
  return as.not.empty(inject(key));
}

/**
 * Creates injectable.
 *
 * @param createDefault - Creates default value.
 * @returns Injectable.
 */
export function injectable<T>(createDefault?: () => T): Injectable<T> {
  const id: InjectionKey<ComputedRef<T>> = Symbol("injectable-id");

  return {
    inject: () =>
      createDefault ? inject(id, computed(createDefault)) : injectRequire(id),
    provide: (settings): void => {
      provide(id, computed(settings));
    },
    testProvide: (settings): IndexedObject => {
      // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
      return { [id as symbol]: computed(() => settings) };
    }
  };
}

/**
 * Creates injectable settings.
 *
 * @param createDefault - Creates default value.
 * @returns Injectable settings.
 */
export function injectableSettings<T>(
  createDefault?: () => T
): InjectableSettings<T> {
  const result = injectable(createDefault);

  return {
    injectSettings: result.inject,
    provideSettings: result.provide,
    testProvideSettings: result.testProvide
  };
}

/**
 * Overrides setting.
 *
 * @param setting - Setting.
 * @param on - On prop.
 * @param off - Off prop.
 * @returns Overridden setting.
 */
export function override(setting: boolean, on: boolean, off: boolean): boolean {
  return setting ? !off : on;
}

/**
 * Returns parent props.
 *
 * @returns Parent props.
 */
export function parentProps<T extends object>(): ParentProps<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return {} as ParentProps<T>;
}

/**
 * Skips check.
 *
 * @param _args - Arguments.
 * @returns _True_.
 */
export function skipCheck(..._args: unknowns): boolean {
  return true;
}

/**
 * Validates emit function.
 *
 * @param emit - Emit function.
 * @returns Emit function.
 */
export function validateEmit<T>(emit: SetupEmit<T>): SetupEmit<T> {
  return emit;
}

/**
 * Validates props.
 *
 * @param props - Props.
 * @returns Props.
 */
export function validateProps<T>(props: SetupProps<T>): SetupProps<T> {
  return props;
}
