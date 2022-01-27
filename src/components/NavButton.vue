<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";
import { isDirectionU } from "./Tooltip.extras";
import Tooltip from "./Tooltip.vue";

export default defineComponent({
  name: "s-nav-button",
  components: {
    "s-tooltip": Tooltip
  },
  props: {
    modelValue: propOptions.boolean(),
    tooltip: propOptions(is.stringU),
    tooltipDirection: propOptions(isDirectionU)
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
    <s-tooltip v-if="hasTooltip" :direction="tooltipDirection">
      {{ tooltip }}
    </s-tooltip>
  </q-btn>
</template>
