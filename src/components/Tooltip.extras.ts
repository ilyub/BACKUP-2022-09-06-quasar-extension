import type { QTooltipProps } from "quasar";
import type { Ref } from "vue";
import { computed, onUnmounted, ref, watch } from "vue";

import * as is from "@skylib/functions/es/guards";
import type { stringU } from "@skylib/functions/es/types/core";
import { createValidationObject } from "@skylib/functions/es/types/core";

import type { PropOptions, PropsToPropOptions } from "./api";
import { createInjectable } from "./api";

export type Direction =
  | "down"
  | "down-left"
  | "down-right"
  | "left"
  | "left-down"
  | "left-up"
  | "right"
  | "right-down"
  | "right-up"
  | "up"
  | "up-left"
  | "up-right";

export interface DisableTooltips {
  readonly active: Ref<boolean>;
}

export type TooltipOptions = PropsToPropOptions<
  QTooltipProps,
  {
    readonly direction: PropOptions<Direction | undefined>;
  }
>;

export interface TooltipSettings {
  readonly delay: number;
  readonly fontSize?: stringU;
  readonly show: boolean;
}

export const DirectionVO = createValidationObject<Direction>({
  "down": "down",
  "down-left": "down-left",
  "down-right": "down-right",
  "left": "left",
  "left-down": "left-down",
  "left-up": "left-up",
  "right": "right",
  "right-down": "right-down",
  "right-up": "right-up",
  "up": "up",
  "up-left": "up-left",
  "up-right": "up-right"
});

export const disabled = computed<boolean>(() => counter.value > 0);

export const isDirection = is.factory(is.enumeration, DirectionVO);

export const isDirectionU = is.or.factory(isDirection, is.undefined);

/**
 * Returns DisableTooltips mixin.
 *
 * @returns DisableTooltips mixin.
 */
export function useDisableTooltips(): DisableTooltips {
  const active = ref(false);

  onUnmounted(() => {
    if (active.value) counter.value--;
  });

  watch(active, value => {
    if (value) counter.value++;
    else counter.value--;
  });

  return { active };
}

export const {
  inject: injectTooltipSettings,
  provide: provideTooltipSettings,
  test: testTooltipSettings
} = createInjectable<TooltipSettings>(() => {
  return {
    delay: 0,
    show: true
  };
});

/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/

const counter = ref(0);
