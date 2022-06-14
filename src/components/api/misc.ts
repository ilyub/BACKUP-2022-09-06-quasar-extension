import { defineFn } from "@skylib/functions";
import { computed, inject, provide, ref, watch } from "vue";
import type {
  Emits,
  Injectable,
  InjectableSettings,
  InjectableTrigger,
  Prop,
  PropOptions,
  PropOptionsBoolean,
  PropOptionsDefault,
  PropOptionsRequired,
  SetupEmit,
  SetupExpose,
  SetupExposed,
  SetupProps
} from "./core";
import type {
  IndexedObject,
  Join2,
  PickKeys,
  UppercaseLetter,
  booleanU,
  unknowns
} from "@skylib/functions";
import type { PublicProps } from "quasar";
import type { FilterKeys } from "ts-toolbelt/out/Object/FilterKeys";
import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import type { ComputedRef, InjectionKey, Ref, VNode } from "vue";

export interface GlobalComponent<P, S> {
  /**
   * Constructor.
   */
  new (): GlobalComponentInstance<P, S>;
}

export interface GlobalComponentInstance<P, S> {
  readonly $props: Emits & P & PublicProps;
  readonly $slots: S;
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
 * Creates injectable.
 *
 * @param defVal - Default value.
 * @returns Injectable.
 */
export function injectable<T>(defVal: T): Injectable<T> {
  const id: InjectionKey<T> = Symbol("injectable-id");

  return {
    inject: () => inject(id, defVal),
    provide: (value): void => {
      provide(id, value);
    },
    testProvide: (value): IndexedObject<T> => {
      // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
      return { [id as symbol]: value };
    }
  };
}

/**
 * Creates injectable settings.
 *
 * @param defaultSettings - Default settings.
 * @returns Injectable settings.
 */
export function injectableSettings<T>(
  defaultSettings: ComputedRef<T>
): InjectableSettings<ComputedRef<T>> {
  const {
    inject: injectSettings,
    provide: provideSettings,
    testProvide: testProvideSettings
  } = injectable(defaultSettings);

  return {
    injectSettings,
    provideSettings,
    testProvideSettings
  };
}

/**
 * Creates trigger.
 *
 * @returns Trigger.
 */
export function injectableTrigger(): InjectableTrigger {
  const id: InjectionKey<ComputedRef<number>> = Symbol("trigger-id");

  return {
    provide: () => {
      const counter = ref(0);

      provide(
        id,
        computed(() => counter.value)
      );

      return () => {
        counter.value++;
      };
    },
    watch: handler => {
      watch(
        inject(
          id,
          computed(() => 0)
        ),
        () => {
          handler();
        }
      );
    }
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
 * Creates prop function.
 *
 * @returns Prop function.
 */
export function propFactory<T extends object>(): Prop<T> {
  return defineFn(
    <
      K extends FilterKeys<T, booleanU, "extends->"> & OptionalKeys<T>
    >(): PropOptions<T[K]> => {
      return {};
    },
    {
      boolean: <_K extends PickKeys<T, booleanU, "extends->">>(
        defVal = false
      ): PropOptionsBoolean => {
        return { default: defVal, type: Boolean };
      },
      default: <
        K extends FilterKeys<T, booleanU, "extends->"> & OptionalKeys<T>
      >(
        defVal: Exclude<T[K], undefined>
      ): PropOptionsDefault<T[K]> => {
        return { default: defVal };
      },
      required: <
        K extends FilterKeys<T, booleanU, "extends->"> & RequiredKeys<T>
      >(): PropOptionsRequired<T[K]> => {
        return { required: true };
      }
    }
  );
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
 * Exposes data.
 *
 * @param expose - Expose function.
 * @param exposed - Exposed data.
 */
export function validateExpose<T>(
  expose: SetupExpose,
  exposed: SetupExposed<T>
): void {
  expose(exposed);
}

/**
 * Validates props.
 *
 * @param props - Props.
 * @returns Props.
 */
export function validateProps<
  T,
  K extends keyof T & `on${UppercaseLetter}${string}` = never
>(props: SetupProps<T, K>): SetupProps<T, K> {
  return props;
}
