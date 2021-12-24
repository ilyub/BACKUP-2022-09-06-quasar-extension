<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";
import Tooltip from "./Tooltip.vue";

export default defineComponent({
  name: "x-nav-button",
  components: {
    "x-tooltip": Tooltip
  },
  props: {
    modelValue: propOptions.boolean(),
    tooltip: propOptions(is.stringU),
    tooltipDirection: propOptions(is.stringU)
  },
  emits: {
    "update:model-value"(value: unknown) {
      return is.boolean(value);
    }
  },
  setup(props, { emit }) {
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
  <q-btn flat round @click="onClick">
    <slot></slot>
    <x-tooltip v-if="hasTooltip" :direction="tooltipDirection">
      {{ tooltip }}
    </x-tooltip>
  </q-btn>
</template>
