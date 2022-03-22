import type { PublicProps } from "quasar";
import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import type { ValueOf } from "type-fest";
import type {
  ComputedRef,
  ExtractPropTypes,
  InjectionKey,
  PropType,
  Ref
} from "vue";
import { computed, inject, provide, ref } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import type * as is from "@skylib/functions/es/guards";
import type { Callable, Join2 } from "@skylib/functions/es/types/core";

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

export type ExtendQuasarProps<T extends object> = Join2<
  { readonly [K in OptionalKeys<T>]: PropOptions<T[K]> },
  { readonly [K in RequiredKeys<T>]: PropOptionsRequired<T[K]> }
>;

export type LooseRequired<T> = {
  [P in string & keyof T]: T[P];
};

export interface PropOptions<T> {
  readonly default?: T;
  readonly required?: true;
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

export type SetupProps<T extends object> = Readonly<
  LooseRequired<Readonly<ExtractPropTypes<T>>>
>;

/**
 * Returns Vue reference compatible with non-public class methods.
 *
 * @param value - Value.
 * @returns Vue reference.
 */
export function classRef<T>(value: T): Ref<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return ref(value) as Ref<T>;
}

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
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      mutableProvide[settingsId as symbol] = computed<T>(() => settings);
    }
  };
}

/**
 * Creates extandable quasar component.
 *
 * @returns Extandable quasar component.
 */
export function propsToPropDefinitions<
  T extends object
>(): ExtendQuasarProps<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return {} as ExtendQuasarProps<T>;
}

/**
 * Injects required value.
 *
 * @param key - Key.
 * @returns Value.
 */
export function injectRequire<T>(key: InjectionKey<T> | string): T {
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
export function propOptionsBoolean(defVal = false): PropOptionsBoolean {
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

/**
 * Validates emit function.
 *
 * @param emit - Emit function.
 * @returns Emit function.
 */
export function validateEmit<T>(emit: ValidateEmit<T>): ValidateEmit<T> {
  return emit;
}

/**
 * Validates props.
 *
 * @param props - Props.
 * @returns Props.
 */
export function validateProps<T>(props: ValidateProps<T>): ValidateProps<T> {
  return props;
}

export type ValidateEmit<T> = ValidateEmit1<T> | ValidateEmit2;

export type ValidateEmit1<T> = ValueOf<{
  [K in keyof T & `on${Capital}${string}`]: T[K] extends Callable | undefined
    ? (
        event: K extends `on${Capital}${infer B}`
          ? K extends `on${infer A}${B}`
            ? `${Uncapitalize<A>}${B}`
            : never
          : never,
        ...args: Parameters<Exclude<T[K], undefined>>
      ) => ReturnType<Exclude<T[K], undefined>>
    : never;
}>;

export interface ValidateEmit2 {
  /**
   * Emits event.
   *
   * @param event - Event.
   * @param args - Arguments.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (event: string, ...args: any[]): void;
}

export type ValidateProps<T> = Omit<T, `on${Capital}${string}`>;

export interface GlobalComponent<P, S> {
  /**
   * Component constructor.
   */
  new (): {
    $props: Emits & P & PublicProps;
    $slots: S;
  };
}

export type Emits = {
  readonly [K in `on${Capital}${string}`]: () => void;
};

// eslint-disable-next-line no-warning-comments
// fixme
export type Capital =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

// eslint-disable-next-line no-warning-comments
// fixme
export type NonCapital =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";
