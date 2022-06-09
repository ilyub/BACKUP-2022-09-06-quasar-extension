import type { Sortable } from "./Sortable.extras";
import type { GlobalComponent, VNodes } from "./api";

export namespace Droppable {
  export interface Global<T extends object = object, D extends object = object>
    extends GlobalComponent<Props<T, D>, Slots> {
    readonly main: Sortable.Global;
  }

  export interface OwnSlots {
    /**
     * Default slot.
     *
     * @returns Nodes.
     */
    readonly default: () => VNodes;
  }

  export interface ParentProps<
    T extends object = object,
    D extends object = object
  > extends Omit<Sortable.Props<T, D>, "group" | "itemKey" | "modelValue"> {}

  export interface Props<T extends object = object, D extends object = object>
    extends ParentProps<T, D> {}

  export interface Slots extends OwnSlots {}
}
