import type { VNode } from "vue";

import type { numberU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";
import { createInjectable } from "./api";

export type GlobalResizer = GlobalComponent<ResizerProps, ResizerSlots>;

export interface ResizerProps {
  readonly max?: numberU;
  readonly min?: numberU;
  readonly modelValue?: numberU;
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

export interface ResizerSettings {
  readonly disable: boolean;
}

export const {
  inject: injectResizerSettings,
  provide: provideResizerSettings,
  test: testResizerSettings
} = createInjectable<ResizerSettings>(() => {
  return { disable: false };
});
