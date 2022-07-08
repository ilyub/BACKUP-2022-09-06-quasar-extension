import type { GlobalComponent, VNodes, plugins } from "./api";
import type { QItem, QItemProps, QItemSlots } from "quasar";
import type { stringU } from "@skylib/functions";

export namespace Item {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: QItem;
  }

  export interface OwnProps {
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

  export interface ParentProps extends QItemProps {}

  export interface ParentSlots extends Omit<QItemSlots, keyof OwnSlots> {}

  export interface PluginProps extends plugins.langProps.Props<"caption"> {}

  export interface Props extends ParentProps, PluginProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
