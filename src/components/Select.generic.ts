import Select from "./Select.vue";
import type { Select as extras } from "./Select.extras";

/**
 * Generic Select component.
 *
 * @returns Select component.
 */
export function genericSelect<T = unknown>(): extras.Global<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return Select as unknown as extras.Global<T>;
}
