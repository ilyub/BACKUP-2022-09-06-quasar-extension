import type { And, IndexedObject, booleanU, types } from "@skylib/functions";
import type {
  PropOptions,
  PropOptionsBoolean,
  PropOptionsDefault,
  PropOptionsRequired
} from "./types";
import type { PublicProps } from "quasar";
import type { ValueOf } from "type-fest";

export type Emit<T> =
  // prettier-break
  ValueOf<{ [K in keyof T]: EmitAux<K, Exclude<T[K], undefined>> }>;

export type EmitAux<K, V> = V extends types.fn.Callable
  ? K extends `on${types.string.UppercaseLetter}${infer B}`
    ? K extends `on${infer A}${B}`
      ? (
          event: `${Uncapitalize<A>}${B}`,
          ...args: Parameters<V>
        ) => ReturnType<V>
      : never
    : never
  : never;

export type Emits = {
  readonly [K in `on${types.string.UppercaseLetter}${string}`]: () => void;
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

export type ParentProps<T extends object> = And<
  { readonly [K in types.object.keys.Optional<T>]: PropOptions<T[K]> },
  { readonly [K in types.object.keys.Required<T>]: PropOptionsRequired<T[K]> }
>;

export interface Prop<T extends object> {
  /**
   * Creates Vue property.
   *
   * @param key - Key.
   * @returns Vue property.
   */
  <K extends PropOptionalKeys<T>>(key: K): PropOptions<T[K]>;
  /**
   * Creates Vue property.
   *
   * @param key - Key.
   * @param defVal - Default value.
   * @returns Vue property.
   */
  readonly boolean: <K extends PropBooleanKeys<T>>(
    key: K,
    defVal?: boolean
  ) => PropOptionsBoolean;
  /**
   * Creates Vue property.
   *
   * @param key - Key.
   * @param defVal - Default value.
   * @returns Vue property.
   */
  readonly default: <K extends PropOptionalKeys<T>>(
    key: K,
    defVal: Exclude<T[K], undefined>
  ) => PropOptionsDefault<Exclude<T[K], undefined>>;
  /**
   * Creates Vue property.
   *
   * @param key - Key.
   * @returns Vue property.
   */
  readonly required: <K extends PropRequiredKeys<T>>(
    key: K
  ) => PropOptionsRequired<T[K]>;
}

export type PropBooleanKeys<T extends object> =
  // prettier-break
  types.object.keys.Pick<T, booleanU, "extends->">;

export type PropOptionalKeys<T extends object> = And<
  types.object.keys.Filter<T, booleanU, "extends->">,
  types.object.keys.Optional<T>
>;

export type PropRequiredKeys<T extends object> = And<
  types.object.keys.Filter<T, booleanU, "extends->">,
  types.object.keys.Required<T>
>;

export type Props<
  T,
  K extends keyof T & `on${types.string.UppercaseLetter}${string}` = never
> = Omit<T, Exclude<keyof T & `on${types.string.UppercaseLetter}${string}`, K>>;
