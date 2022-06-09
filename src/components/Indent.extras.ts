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

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface Props {}

  export interface Slots extends OwnSlots {}
}
