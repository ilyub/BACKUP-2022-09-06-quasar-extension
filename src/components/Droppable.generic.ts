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
  return Droppable as unknown as extras.Global<T, D>;
}
