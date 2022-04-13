import * as is from "@skylib/functions/es/guards";
import { createValidationObject } from "@skylib/functions/es/helpers";
import type { stringU } from "@skylib/functions/es/types/core";
import type { QTooltipProps, QTooltipSlots } from "quasar";
import type { Ref } from "vue";
import { computed, onUnmounted, ref, watch } from "vue";
import type { GlobalComponent } from "./api";
import { createInjectable } from "./api";

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

export const {
  inject: injectTooltipSettings,
  provide: provideTooltipSettings,
  test: testTooltipSettings
} = createInjectable<TooltipSettings>(() => {
  return {
    delay: 0,
    fontSize: undefined,
    show: true
  };
});

export type Direction =
  | "down-left"
  | "down-right"
  | "down"
  | "left-down"
  | "left-up"
  | "left"
  | "right-down"
  | "right-up"
  | "right"
  | "up-left"
  | "up-right"
  | "up";

export interface DisableTooltips {
  readonly active: Ref<boolean>;
}

export type GlobalTooltip = GlobalComponent<TooltipProps, TooltipSlots>;

export interface TooltipOwnProps {
  readonly direction?: Direction | undefined;
}

export type TooltipParentProps = QTooltipProps;

export interface TooltipProps extends TooltipParentProps, TooltipOwnProps {}

export interface TooltipSettings {
  readonly delay: number;
  readonly fontSize: stringU;
  readonly show: boolean;
}

export type TooltipSlots = QTooltipSlots;

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

const counter = ref(0);
