import type {
  Callable,
  IndexedObject,
  IndexedRecord,
  PickKeys,
  UppercaseLetter,
  booleanU,
  is
} from "@skylib/functions";
import type { FilterKeys } from "ts-toolbelt/out/Object/FilterKeys";
import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import type { ValueOf } from "type-fest";
import type { ComputedRef, PropType, Ref } from "vue";

export type Emits = {
  readonly [K in `on${UppercaseLetter}${string}`]: () => void;
};

export interface Injectable<T> {
  /**
   * Injects settings.
   *
   * @returns Settings.
   */
  readonly inject: () => T;
  /**
   * Provides value.
   *
   * @param value - Default value.
   */
  readonly provide: (value: T) => void;
  /**
   * Returns provide value.
   *
   * @param value - Value.
   * @returns Provide object.
   */
  readonly testProvide: (value: T) => IndexedObject<T>;
}

export interface InjectableSettings<T> {
  /**
   * Injects settings.
   *
   * @returns Settings.
   */
  readonly injectSettings: () => T;
  /**
   * Provides settings.
   *
   * @param settings - Default settings.
   */
  readonly provideSettings: (settings: T) => void;
  /**
   * Returns provide object.
   *
   * @param settings - Settings.
   * @returns Provide object.
   */
  readonly testProvideSettings: (settings: T) => IndexedObject<T>;
}

export interface Prop<T extends object> {
  /**
   * Creates Vue property.
   *
   * @returns Vue property.
   */
  <
    K extends FilterKeys<T, booleanU, "extends->"> & OptionalKeys<T>
  >(): PropOptions<T[K]>;
  /**
   * Creates Vue property.
   *
   * @param defVal - Default value.
   * @returns Vue property.
   */
  readonly boolean: <_K extends PickKeys<T, booleanU, "extends->">>(
    defVal?: boolean
  ) => PropOptionsBoolean;
  /**
   * Creates Vue property.
   *
   * @param defVal - Default value.
   * @returns Vue property.
   */
  readonly default: <
    K extends FilterKeys<T, booleanU, "extends->"> & OptionalKeys<T>
  >(
    defVal: Exclude<T[K], undefined>
  ) => PropOptionsDefault<T[K]>;
  /**
   * Creates Vue property.
   *
   * @returns Vue property.
   */
  readonly required: <
    K extends FilterKeys<T, booleanU, "extends->"> & RequiredKeys<T>
  >() => PropOptionsRequired<T[K]>;
}

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

export type SetupEmit<T> = ValueOf<{
  [K in keyof T]: SetupEmitAux<K, Exclude<T[K], undefined>>;
}>;

export type SetupEmitAux<K, V> = V extends Callable
  ? K extends `on${UppercaseLetter}${infer B}`
    ? K extends `on${infer A}${B}`
      ? (
          event: `${Uncapitalize<A>}${B}`,
          ...args: Parameters<V>
        ) => ReturnType<V>
      : never
    : never
  : never;

export interface SetupExpose {
  /**
   * Exposes data.
   *
   * @param exposed - Exposed data.
   */
  (exposed?: IndexedRecord | undefined): void;
}

export type SetupExposed<T> = {
  readonly [K in keyof T]: ComputedRef<T[K]> | Ref<T[K]> | T[K];
};

export type SetupProps<
  T,
  K extends keyof T & `on${UppercaseLetter}${string}` = never
> = Omit<T, Exclude<keyof T & `on${UppercaseLetter}${string}`, K>>;

export interface Trigger {
  /**
   * Creates trigger.
   *
   * @returns Trigger.
   */
  readonly get: () => () => void;
  /**
   * Watches trigger.
   *
   * @param handler - Handler.
   */
  readonly watch: (handler: () => void) => void;
}
