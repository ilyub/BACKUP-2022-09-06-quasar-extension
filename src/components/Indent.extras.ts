import type { GlobalComponent, VNodes } from "./api";

export type GlobalIndent = GlobalComponent<IndentProps, IndentSlots>;

export interface IndentProps {}

export interface IndentSlots {
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => VNodes;
}
