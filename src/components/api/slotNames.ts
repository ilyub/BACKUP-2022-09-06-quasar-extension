import { is, o, reflect } from "@skylib/functions";
import type { nevers, WritableIndexedObject } from "@skylib/functions";
import * as _ from "@skylib/lodash-commonjs-es";
// eslint-disable-next-line no-warning-comments
// fixme
import type { CamelCase } from "type-fest";
import type { ComputedRef } from "vue";
import { computed, useSlots } from "vue";

export type SlotsNames<T extends PropertyKey> = SlotsNames1<T> & SlotsNames2<T>;

export type SlotsNames1<T extends PropertyKey> = {
  readonly [K in T as CamelCase<K>]: K;
};

export interface SlotsNames2<T extends PropertyKey> {
  /**
   * Checks that slot exists.
   *
   * @param name - Slot name.
   * @returns _True_ if slot exists, _false_ otherwise.
   */
  readonly has: (name: T) => boolean;
  /**
   * Checks that some slot exists.
   *
   * @param names - Slot names.
   * @returns _True_ if slot exists, _false_ otherwise.
   */
  readonly hasSome: (...names: T[]) => boolean;
  readonly passThroughSlots: nevers;
}

/**
 * Slot names module.
 *
 * @returns Slot names.
 */
export function useSlotsNames<T>() {
  return function <U extends keyof T = never>(
    ...useKeys: U[]
  ): ComputedRef<SlotsNames<U>> {
    const useKeysSet: Set<PropertyKey> = new Set(useKeys);

    return computed<SlotsNames<U>>(() => {
      const usableSlots: WritableIndexedObject = {};

      const passThroughSlots: PropertyKey[] = [];

      const slots = useSlots();

      for (const name of o.keys(slots))
        if (useKeysSet.has(name)) usableSlots[_.camelCase(name)] = name;
        else passThroughSlots.push(name);

      // eslint-disable-next-line no-type-assertion/no-type-assertion
      const slots1 = usableSlots as SlotsNames1<U>;

      const slots2: SlotsNames2<U> = {
        has(name: U): boolean {
          return is.not.empty(reflect.get(slots, name));
        },
        hasSome(...names: U[]): boolean {
          return names.some(name => is.not.empty(reflect.get(slots, name)));
        },
        // eslint-disable-next-line no-type-assertion/no-type-assertion
        passThroughSlots: passThroughSlots as unknown as nevers
      };

      return { ...slots1, ...slots2 };
    });
  };
}
