import * as _ from "lodash-es";
// eslint-disable-next-line @skylib/disallow-by-regexp
// temp
import type { CamelCase } from "type-fest";
import type { ComputedRef } from "vue";
import { computed, useSlots } from "vue";

import type { IndexedObject } from "@skylib/functions/es/types/core";

export type SlotsNames<T extends PropertyKey> = {
  readonly [K in T as CamelCase<K>]: K;
} & {
  readonly passThroughSlots: readonly never[];
};

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
      const result: IndexedObject = {};

      const passThroughSlots: PropertyKey[] = [];

      for (const name of Object.keys(useSlots()))
        if (useKeysSet.has(name)) result[_.camelCase(name)] = name;
        else passThroughSlots.push(name);

      // eslint-disable-next-line no-type-assertion/no-type-assertion
      return { ...result, passThroughSlots } as unknown as SlotsNames<U>;
    });
  };
}
