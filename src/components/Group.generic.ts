import Group from "./Group.vue";
import type { Group as extras } from "./Group.extras";

/**
 * Generic Group component.
 *
 * @returns Generic Group component.
 */
export function genericGroup<T extends string>(): extras.Global<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return Group as unknown as extras.Global<T>;
}
