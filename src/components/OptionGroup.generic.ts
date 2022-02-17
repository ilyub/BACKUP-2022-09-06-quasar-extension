import type { GlobalOptionGroup } from "./OptionGroup.extras";
import OptionGroup from "./OptionGroup.vue";

/**
 * Generic OptionGroup component.
 *
 * @returns OptionGroup component.
 */
export function genericOptionGroup<T = unknown>(): GlobalOptionGroup<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return OptionGroup as unknown as GlobalOptionGroup<T>;
}
