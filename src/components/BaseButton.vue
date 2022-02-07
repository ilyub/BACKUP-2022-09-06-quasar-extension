<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { BaseButtonPropOptions } from "./BaseButton.extras";
import { isDirectionU } from "./Tooltip.extras";
import Tooltip from "./Tooltip.vue";

export default defineComponent({
  name: "x-base-button",
  components: {
    "x-tooltip": Tooltip
  },
  props: {
    ...({} as BaseButtonPropOptions),
    modelValue: propOptions.boolean(),
    tooltip: propOptions(is.stringU),
    tooltipDirection: propOptions(isDirectionU)
  },
  emits: {
    "update:model-value": (value: boolean) => is.boolean(value)
  },
  setup(props: SetupProps<BaseButtonPropOptions>, { emit }) {
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
    <x-tooltip v-if="hasTooltip" :direction="tooltipDirection">
      {{ tooltip }}
    </x-tooltip>
  </q-btn>
</template>
