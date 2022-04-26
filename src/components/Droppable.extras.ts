import type { SortableProps, SortableSlots } from "./Sortable.extras";
import type { GlobalComponent, VNodes } from "./api";

export interface DroppableOwnProps {}

export type DroppableParentProps = Omit<
  SortableProps,
  "group" | "itemKey" | "modelValue"
>;

export interface DroppableProps
  extends DroppableParentProps,
    DroppableOwnProps {}

export interface DroppableSlots extends SortableSlots {
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => VNodes;
}

export type GlobalDroppable = GlobalComponent<DroppableProps, DroppableSlots>;
