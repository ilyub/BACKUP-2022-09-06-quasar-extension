<script lang="ts">
import type { QBtnProps } from "quasar";
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import { isDirectionU } from "./Tooltip.extras";
import Tooltip from "./Tooltip.vue";

const baseProps = {} as PropsToPropOptions<QBtnProps>;

export default defineComponent({
  name: "s-base-button",
  components: {
    "s-tooltip": Tooltip
  },
  props: {
    ...baseProps,
    modelValue: propOptions.boolean(),
    tooltip: propOptions(is.stringU),
    tooltipDirection: propOptions(isDirectionU)
  },
  emits: {
    "update:model-value"(this: undefined, value: boolean) {
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
  <q-btn class="button-group-member" @click="onClick">
    <slot></slot>
    <s-tooltip v-if="hasTooltip" :direction="tooltipDirection">
      {{ tooltip }}
    </s-tooltip>
  </q-btn>
</template>
