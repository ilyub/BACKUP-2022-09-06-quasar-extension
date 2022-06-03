import type { GlobalComponent, VNodes } from "./api";
import type { stringU } from "@skylib/functions";
import type { QItem, QItemProps } from "quasar";

export namespace Item {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QItem;
  }

  export interface OwnProps {
    readonly caption?: stringU;
    readonly icon?: stringU;
  }

  export interface OwnSlots {
    /**
     * Caption slot.
     *
     * @returns Nodes.
     */
    readonly caption: () => VNodes;
    /**
     * Default slot.
     *
     * @returns Nodes.
     */
    readonly default: () => VNodes;
    /**
     * Icon slot.
     *
     * @returns Nodes.
     */
    readonly icon: () => VNodes;
  }

  export interface ParentProps extends Omit<QItemProps, keyof OwnProps> {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface ParentSlots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
