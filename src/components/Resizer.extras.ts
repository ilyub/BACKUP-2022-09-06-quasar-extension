import type { VNode } from "vue";

import type { numberU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";

export type GlobalResizer = GlobalComponent<ResizerProps, ResizerSlots>;

export interface ResizerProps {
  readonly max?: numberU;
  readonly min: number;
  readonly modelValue: number;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: (value: number) => void;
}

export interface ResizerSlots {
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => readonly VNode[];
}
