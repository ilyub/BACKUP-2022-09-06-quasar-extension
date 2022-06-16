import type {
  PropOptions,
  PropOptionsBoolean,
  PropOptionsDefault,
  PropOptionsRequired
} from "./types";
import type {
  Callable,
  IndexedObject,
  IndexedRecord,
  Join2,
  PickKeys,
  UppercaseLetter,
  booleanU
} from "@skylib/functions";
import type { PublicProps } from "quasar";
import type { FilterKeys } from "ts-toolbelt/out/Object/FilterKeys";
import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import type { ValueOf } from "type-fest";
import type { ComputedRef, Ref } from "vue";

export type Emits = {
  readonly [K in `on${UppercaseLetter}${string}`]: () => void;
};

export interface GlobalComponentInstance<P, S> {
  readonly $props: Emits & P & PublicProps;
  readonly $slots: S;
}

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

export interface InjectableTrigger {
  /**
   * Provides trigger.
   *
   * @returns Trigger.
   */
  readonly provide: () => () => void;
  /**
   * Watches trigger.
   *
   * @param handler - Handler.
   */
  readonly watch: (handler: () => void) => void;
}

export type ParentProps<T extends object> = Join2<
  { readonly [K in OptionalKeys<T>]: PropOptions<T[K]> },
  { readonly [K in RequiredKeys<T>]: PropOptionsRequired<T[K]> }
>;

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
  ) => PropOptionsDefault<Exclude<T[K], undefined>>;
  /**
   * Creates Vue property.
   *
   * @returns Vue property.
   */
  readonly required: <
    K extends FilterKeys<T, booleanU, "extends->"> & RequiredKeys<T>
  >() => PropOptionsRequired<T[K]>;
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
