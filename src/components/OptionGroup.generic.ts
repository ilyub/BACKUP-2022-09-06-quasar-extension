import OptionGroup from "./OptionGroup.vue";
import type { OptionGroup as extras } from "./OptionGroup.extras";

/**
 * Generic OptionGroup component.
 *
 * @returns OptionGroup component.
 */
export function genericOptionGroup<T = unknown>(): extras.Global<T> {
  return OptionGroup as unknown as extras.Global<T>;
}
