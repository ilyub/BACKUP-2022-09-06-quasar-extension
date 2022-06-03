import type { GlobalComponent, VNodes } from "./api";

export namespace IconButtonsGroup {
  export interface Global extends GlobalComponent<Props, Slots> {}

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

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface ParentProps {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface ParentSlots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
