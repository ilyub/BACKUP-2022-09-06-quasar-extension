import type { GlobalTable } from "./Table.extras";
import Table from "./Table.vue";

/**
 * Generic Table component.
 *
 * @returns Table component.
 */
export function genericTable<T extends object>(): GlobalTable<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return Table as unknown as GlobalTable<T>;
}
