<script lang="ts">
import type { QTooltipProps, QTooltipSlots } from "quasar";
import { computed, defineComponent, inject } from "vue";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import type { Direction, TooltipSettings } from "./Tooltip.extras";
import {
  defaultTooltipSettings,
  disabled,
  injectTooltipSettings,
  isDirectionU
} from "./Tooltip.extras";

type Anchor =
  | "bottom end"
  | "bottom left"
  | "bottom middle"
  | "bottom right"
  | "bottom start"
  | "center end"
  | "center left"
  | "center middle"
  | "center right"
  | "center start"
  | "top end"
  | "top left"
  | "top middle"
  | "top right"
  | "top start";

type Self =
  | "bottom end"
  | "bottom left"
  | "bottom middle"
  | "bottom right"
  | "bottom start"
  | "center end"
  | "center left"
  | "center middle"
  | "center right"
  | "center start"
  | "top end"
  | "top left"
  | "top middle"
  | "top right"
  | "top start";

export default defineComponent({
  name: "s-tooltip",
  props: {
    ...({} as PropsToPropOptions<QTooltipProps>),
    direction: propOptions(isDirectionU)
  },
  // eslint-disable-next-line @skylib/prefer-readonly
  setup(props, { slots }) {
    const direction = computed<Direction>(() => props.direction ?? "down");

    const settings = inject(
      injectTooltipSettings,
      computed<TooltipSettings>(defaultTooltipSettings)
    );

    return {
      anchor: computed<Anchor>(() => {
        switch (direction.value) {
          case "down":
            return "bottom middle";

          case "down-left":
            return "bottom right";

          case "down-right":
            return "bottom left";

          case "left":
            return "center left";

          case "left-down":
            return "top left";

          case "left-up":
            return "bottom left";

          case "right":
            return "center right";

          case "right-down":
            return "top right";

          case "right-up":
            return "bottom right";

          case "up":
            return "top middle";

          case "up-left":
            return "top right";

          case "up-right":
            return "top left";
        }
      }),
      disabled,
      offset: computed<[number, number]>(() => {
        switch (direction.value) {
          case "down":
          case "down-left":
          case "down-right":
            return [0, 10];

          case "left":
          case "left-down":
          case "left-up":
            return [10, 0];

          case "right":
          case "right-down":
          case "right-up":
            return [10, 0];

          case "up":
          case "up-left":
          case "up-right":
            return [0, 10];
        }
      }),
      passThroughSlots: computed<Array<keyof QTooltipSlots>>(
        () => Object.keys(slots) as Array<keyof QTooltipSlots>
      ),
      self: computed<Self>(() => {
        switch (direction.value) {
          case "down":
            return "top middle";

          case "down-left":
            return "top right";

          case "down-right":
            return "top left";

          case "left":
            return "center right";

          case "left-down":
            return "top right";

          case "left-up":
            return "bottom right";

          case "right":
            return "center left";

          case "right-down":
            return "top left";

          case "right-up":
            return "bottom left";

          case "up":
            return "bottom middle";

          case "up-left":
            return "bottom right";

          case "up-right":
            return "bottom left";
        }
      }),
      settings,
      transitionHide: computed<string>(() => {
        switch (direction.value) {
          case "down":
          case "down-left":
          case "down-right":
            return "jump-up";

          case "left":
          case "left-down":
          case "left-up":
            return "jump-right";

          case "right":
          case "right-down":
          case "right-up":
            return "jump-left";

          case "up":
          case "up-left":
          case "up-right":
            return "jump-down";
        }
      }),
      transitionShow: computed<string>(() => {
        switch (direction.value) {
          case "down":
          case "down-left":
          case "down-right":
            return "jump-down";

          case "left":
          case "left-down":
          case "left-up":
            return "jump-left";

          case "right":
          case "right-down":
          case "right-up":
            return "jump-right";

          case "up":
          case "up-left":
          case "up-right":
            return "jump-up";
        }
      })
    };
  }
});
</script>

<template>
  <q-tooltip
    v-if="settings.show && !disabled"
    :anchor="anchor"
    :delay="settings.delay"
    :offset="offset"
    :self="self"
    :transition-hide="transitionHide"
    :transition-show="transitionShow"
  >
    <template v-for="name in passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-tooltip>
</template>
