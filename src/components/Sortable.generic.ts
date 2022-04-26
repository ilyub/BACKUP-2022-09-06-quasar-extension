import Sortable from "./Sortable.vue";
import type { GlobalSortable } from "./Sortable.extras";

/**
 * Generic Sortable component.
 *
 * @returns Sortable component.
 */
export function genericSortable<T extends object>(): GlobalSortable<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return Sortable as unknown as GlobalSortable<T>;
}
