import type { GlobalPageTable } from "./PageTable.extras";
import PageTable from "./PageTable.vue";

/**
 * Generic PageTable component.
 *
 * @returns PageTable component.
 */
export function genericPageTable<T = object>(): GlobalPageTable<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return PageTable as unknown as GlobalPageTable<T>;
}
