import type { GlobalComponentConstructor } from "quasar";
import type { VNode } from "vue";

import type { ReadonlyOmit } from "./api";
import type { SortableProps, SortableSlots } from "./Sortable.extras";

export type DroppableParentProps = ReadonlyOmit<
  SortableProps,
  "group" | "itemKey" | "modelValue"
>;

export interface DroppableOwnProps {}

export interface DroppableProps
  extends DroppableParentProps,
    DroppableOwnProps {}

export interface DroppableSlots extends SortableSlots {
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => readonly VNode[];
}

export type GlobalDroppable = GlobalComponentConstructor<
  DroppableProps,
  DroppableSlots
>;
