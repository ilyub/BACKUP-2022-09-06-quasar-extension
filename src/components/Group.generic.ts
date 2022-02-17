import type { GlobalGroup } from "./Group.extras";
import Group from "./Group.vue";

/**
 * Generic Group component.
 *
 * @returns Group component.
 */
export function genericGroup<T extends string = string>(): GlobalGroup<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return Group as unknown as GlobalGroup<T>;
}
