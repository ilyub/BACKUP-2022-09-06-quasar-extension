import type { GlobalSelect } from "./Select.extras";
import Select from "./Select.vue";

/**
 * Generic Select component.
 *
 * @returns Select component.
 */
export function genericSelect<T = unknown>(): GlobalSelect<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return Select as unknown as GlobalSelect<T>;
}
