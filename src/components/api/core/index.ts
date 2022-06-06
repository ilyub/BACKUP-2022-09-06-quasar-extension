import type {
  Callable,
  IndexedObject,
  is,
  UppercaseLetter
} from "@skylib/functions";
import type { ValueOf } from "type-fest";
import type { ComputedRef, PropType } from "vue";

export type Emits = {
  readonly [K in `on${UppercaseLetter}${string}`]: () => void;
};

export interface Injectable<T> {
  /**
   * Injects settings.
   *
   * @returns Settings.
   */
  readonly inject: () => ComputedRef<T>;
  /**
   * Provides settings.
   *
   * @param settings - Default settings.
   */
  readonly provide: (settings: () => T) => void;
  /**
   * Returns provide object.
   *
   * @param settings - Settings.
   * @returns Provide object.
   */
  readonly testProvide: (settings: T) => IndexedObject;
}

export interface InjectableSettings<T> {
  /**
   * Injects settings.
   *
   * @returns Settings.
   */
  readonly injectSettings: () => ComputedRef<T>;
  /**
   * Provides settings.
   *
   * @param settings - Default settings.
   */
  readonly provideSettings: (settings: () => T) => void;
  /**
   * Returns provide object.
   *
   * @param settings - Settings.
   * @returns Provide object.
   */
  readonly testProvideSettings: (settings: T) => IndexedObject;
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
