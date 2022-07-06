import type { GlobalComponent, VNodes } from "./api";

export namespace Indent {
  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface OwnSlots {
    /**
     * Default slot.
     *
     * @returns Nodes.
     */
    readonly default: () => VNodes;
  }

  export interface Props {}

  export interface Slots extends OwnSlots {}
}
