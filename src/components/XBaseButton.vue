<script lang="ts">
import type { QBtnProps } from "quasar";
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import { isDirectionU } from "./XTooltip.extras";
import XTooltip from "./XTooltip.vue";

const baseProps = {} as PropsToPropOptions<QBtnProps>;

export default defineComponent({
  name: "x-base-button",
  components: {
    "x-tooltip": XTooltip
  },
  props: {
    ...baseProps,
    modelValue: propOptions.boolean(),
    tooltip: propOptions(is.stringU),
    tooltipDirection: propOptions(isDirectionU)
  },
  emits: {
    "update:model-value": (value: boolean) => is.boolean(value)
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
  <q-btn @click="onClick">
    <slot></slot>
    <x-tooltip v-if="hasTooltip" :direction="tooltipDirection">
      {{ tooltip }}
    </x-tooltip>
  </q-btn>
</template>
