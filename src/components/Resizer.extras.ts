import type { GlobalComponentConstructor } from "quasar";
import type { VNode } from "vue";

import type { numberU } from "@skylib/functions/es/types/core";

export type GlobalResizer = GlobalComponentConstructor<
  ResizerProps,
  ResizerSlots
>;

export interface ResizerProps {
  readonly max?: numberU;
  readonly min: number;
  readonly modelValue: number;
}

export interface ResizerSlots {
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => readonly VNode[];
}
