import OptionGroup from "./OptionGroup.vue";
import type { OptionGroup as extras } from "./OptionGroup.extras";

/**
 * Generic OptionGroup component.
 *
 * @returns OptionGroup component.
 */
export function genericOptionGroup<T = unknown>(): extras.Global<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return OptionGroup as unknown as extras.Global<T>;
}
