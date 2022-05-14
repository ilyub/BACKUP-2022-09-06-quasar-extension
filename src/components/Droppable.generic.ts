import Droppable from "./Droppable.vue";
import type { Droppable as extras } from "./Droppable.extras";

/**
 * Generic Droppable component.
 *
 * @returns Generic Droppable component.
 */
export function genericDroppable<
  T extends object,
  D extends object = object
>(): extras.Global<T, D> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return Droppable as unknown as extras.Global<T, D>;
}
