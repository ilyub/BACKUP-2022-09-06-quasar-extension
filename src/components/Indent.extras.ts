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

  // eslint-disable-next-line @skylib/typescript/no-empty-interfaces -- Wait for @skylib/eslint-plugin update
  export interface Props {}

  export interface Slots extends OwnSlots {}
}
