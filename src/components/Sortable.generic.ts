import Sortable from "./Sortable.vue";
import type { Sortable as extras } from "./Sortable.extras";

/**
 * Generic Sortable component.
 *
 * @returns Sortable component.
 */
export function genericSortable<
  T extends object,
  D extends object = object
>(): extras.Global<T, D> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return Sortable as unknown as extras.Global<T, D>;
}
