import type { GlobalComponentConstructor } from "quasar";
import type { VNode } from "vue";

export type GlobalIndent = GlobalComponentConstructor<IndentProps, IndentSlots>;

export interface IndentProps {}

export interface IndentSlots {
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => readonly VNode[];
}
