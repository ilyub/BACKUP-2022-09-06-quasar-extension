import type { Sortable } from "./Sortable.extras";
import type { GlobalComponent, VNodes } from "./api";

export namespace Droppable {
  export interface Global<T extends object = object, D extends object = object>
    extends GlobalComponent<Props<T, D>, Slots> {
    readonly main: Sortable.Global;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnProps {}

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

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface ParentSlots {}

  export interface Props<T extends object = object, D extends object = object>
    extends ParentProps<T, D>,
      OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
