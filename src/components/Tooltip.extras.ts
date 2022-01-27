import type { Ref } from "vue";
import { computed, onUnmounted, ref, watch } from "vue";

import * as is from "@skylib/functions/es/guards";
import { createValidationObject } from "@skylib/functions/es/types/core";

import type { ComputedInjectionKey } from "./api";

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

export type InjectTooltipSettings = ComputedInjectionKey<TooltipSettings>;

export interface TooltipSettings {
  readonly delay: number;
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

export const injectTooltipSettings: InjectTooltipSettings =
  Symbol("TooltipSettings");

export const isDirection = is.factory(is.enumeration, DirectionVO);

export const isDirectionU = is.or.factory(isDirection, is.undefined);

/**
 * Returns default settings.
 *
 * @returns Default settings.
 */
export function defaultTooltipSettings(): TooltipSettings {
  return {
    delay: 0,
    show: true
  };
}

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

/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/

const counter = ref(0);
