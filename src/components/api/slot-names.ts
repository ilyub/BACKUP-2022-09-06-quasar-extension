import { is, o } from "@skylib/functions";
import * as _ from "@skylib/lodash-commonjs-es";
import { computed, useSlots } from "vue";
import type { nevers } from "@skylib/functions";
import type { CamelCase } from "type-fest";
import type { ComputedRef } from "vue";

/**
 * Use slot names plugin.
 *
 * @returns Slot names plugin.
 */
export function slotNames<T>() {
  return function <U extends string & keyof T = never>(
    ...use: U[]
  ): slotNames.Plugin<U> {
    return computed(() => {
      const slots = useSlots();

      // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
      const passThroughSlots = _.difference(
        o.keys(slots),
        use
      ) as unknown as nevers;

      // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
      const usableSlots = o.fromEntries(
        use.map(name => [_.camelCase(name), name])
      ) as slotNames.UsableSlots<U>;

      return {
        has: (name: U): boolean => is.not.empty(slots[name]),
        hasSome: (...names: U[]): boolean =>
          names.some(name => is.not.empty(slots[name])),
        passThroughSlots,
        ...usableSlots
      };
    });
  };
}

export namespace slotNames {
  export type Plugin<T extends PropertyKey> = ComputedRef<
    PluginMethods<T> & UsableSlots<T>
  >;

  export interface PluginMethods<T extends PropertyKey> {
    /**
     * Checks if slot exists.
     *
     * @param name - Slot name.
     * @returns _True_ if slot exists, _false_ otherwise.
     */
    readonly has: (name: T) => boolean;
    /**
     * Checks if some slot exists.
     *
     * @param names - Slot names.
     * @returns _True_ if slot exists, _false_ otherwise.
     */
    readonly hasSome: (...names: T[]) => boolean;
    readonly passThroughSlots: nevers;
  }

  export type UsableSlots<T extends PropertyKey> = {
    readonly [K in T as CamelCase<K>]: K;
  };
}
