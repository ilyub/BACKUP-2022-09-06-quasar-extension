<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[BaseButton] */

import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { BaseButtonProps } from "./BaseButton.extras";
import { isDirectionU } from "./Tooltip.extras";
import Tooltip from "./Tooltip.vue";

export default defineComponent({
  name: "m-base-button",
  components: {
    "m-tooltip": Tooltip
  },
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as BaseButtonProps),
    modelValue: propOptions.boolean(),
    tooltip: propOptions(is.stringU),
    tooltipDirection: propOptions(isDirectionU)
  },
  emits: {
    "update:model-value": (value: boolean) => is.boolean(value)
  },
  setup(props: SetupProps<BaseButtonProps>, { emit }) {
    return {
      hasTooltip: computed<boolean>(() => is.not.empty(props.tooltip)),
      onClick(): void {
        emit("update:model-value", !props.modelValue);
      }
    };
  }
});
</script>

<template>
  <q-btn @click="onClick">
    <slot></slot>
    <m-tooltip v-if="hasTooltip" :direction="tooltipDirection">
      {{ tooltip }}
    </m-tooltip>
  </q-btn>
</template>
