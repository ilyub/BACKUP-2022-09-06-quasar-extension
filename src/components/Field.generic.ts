import Field from "./Field.vue";
import type { Field as extras } from "./Field.extras";

/**
 * Generic Field component.
 *
 * @returns Generic Field component.
 */
export function genericField<T>(): extras.Global<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return Field as unknown as extras.Global<T>;
}
