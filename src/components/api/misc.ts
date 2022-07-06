import { as, defineFn } from "@skylib/functions";
import { computed, inject, provide, ref, watch } from "vue";
import type {
  GlobalComponentInstance,
  Injectable,
  InjectableSettings,
  InjectableTrigger,
  ParentProps,
  Prop,
  PropBooleanKeys,
  PropOptionalKeys,
  PropRequiredKeys,
  SetupEmit,
  SetupExpose,
  SetupExposed,
  SetupProps
} from "./misc.internal";
import type {
  PropOptions,
  PropOptionsBoolean,
  PropOptionsDefault,
  PropOptionsRequired
} from "./types";
import type {
  IndexedObject,
  UppercaseLetter,
  unknowns
} from "@skylib/functions";
import type { ComputedRef, InjectionKey, Ref, VNode } from "vue";

export const prop = defineFn(
  /**
   * Creates Vue property.
   *
   * @returns Vue property.
   */
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
    default: <T>(
      defVal: Exclude<T, undefined>
    ): PropOptionsDefault<Exclude<T, undefined>> => {
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
  new (): GlobalComponentInstance<P, S>;
}

export type VNodes = readonly VNode[];

/**
 * Creates Vue ref compatible with non-public class methods.
 *
 * @param value - Value.
 * @returns Vue ref.
 */
export function classRef<T>(value: T): Ref<T> {
  return ref(value) as Ref<T>;
}

/**
 * Injects required value.
 *
 * @param key - Key.
 * @returns Value.
 */
export function injectRequire<T>(key: InjectionKey<T> | string): T {
  return as.not.empty(inject(key));
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
  return {} as ParentProps<T>;
}

/**
 * Creates prop function.
 *
 * @returns Prop function.
 */
export function propFactory<T extends object>(): Prop<T> {
  return defineFn(
    <K extends PropOptionalKeys<T>>(_key: K): PropOptions<T[K]> => {
      return {};
    },
    {
      boolean: <K extends PropBooleanKeys<T>>(
        _key: K,
        defVal = false
      ): PropOptionsBoolean => {
        return { default: defVal, type: Boolean };
      },
      default: <K extends PropOptionalKeys<T>>(
        _key: K,
        defVal: Exclude<T[K], undefined>
      ): PropOptionsDefault<Exclude<T[K], undefined>> => {
        return { default: defVal };
      },
      required: <K extends PropRequiredKeys<T>>(
        _key: K
      ): PropOptionsRequired<T[K]> => {
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
 * Converts value to computed value.
 *
 * @param value - Value.
 * @returns Computed value.
 */
export function toComputed<T>(value: T): ComputedRef<T> {
  return computed(() => value);
}

/**
 * Validates emit function.
 *
 * @param _emit - Emit function.
 */
export function validateEmit<T>(_emit: SetupEmit<T>): void {
  // Nothing to do
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
 * @param _props - Props.
 */
export function validateProps<
  T,
  K extends keyof T & `on${UppercaseLetter}${string}` = never
>(_props: SetupProps<T, K>): void {
  // Nothing to do
}
