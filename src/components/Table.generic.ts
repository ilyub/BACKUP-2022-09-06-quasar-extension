import Table from "./Table.vue";
import type { Table as extras } from "./Table.extras";

/**
 * Generic Table component.
 *
 * @returns Table component.
 */
export function genericTable<T extends object>(): extras.Global<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return Table as unknown as extras.Global<T>;
}
