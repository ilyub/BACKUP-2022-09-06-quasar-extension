import type { GlobalComponent, VNodes, plugins } from "./api";
import type { QCard, QCardProps } from "quasar";
import type { booleanU, stringU } from "@skylib/functions";
import { icons as baseIcons } from "@skylib/facades";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends Card.Icon {}
    }
  }
}

export namespace Card {
  export const icons: baseIcons.Icons<keyof Icon> = baseIcons;

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: QCard;
  }

  export interface Icon {
    readonly close: true;
  }

  export interface OwnProps {
    readonly minWidth?: stringU;
    readonly transparentHeader?: booleanU;
  }

  export interface OwnSlots {
    /**
     * Default slot.
     *
     * @returns Nodes.
     */
    readonly "default": () => VNodes;
    /**
     * Header actions slot.
     *
     * @returns Nodes.
     */
    readonly "header-actions": () => VNodes;
    /**
     * Title slot.
     *
     * @returns Nodes.
     */
    readonly "title": () => VNodes;
  }

  export interface ParentProps extends QCardProps {}

  export interface PluginProps extends plugins.langProps.Props<"title"> {}

  export interface Props extends ParentProps, PluginProps, OwnProps {}

  export interface Slots extends OwnSlots {}
}
