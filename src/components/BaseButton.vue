<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[BaseButton] */

import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions, propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  BaseButtonOwnProps,
  BaseButtonParentProps,
  BaseButtonSlots
} from "./BaseButton.extras";
import { isDirectionU } from "./Tooltip.extras";

export default defineComponent({
  name: "m-base-button",
  props: {
    ...propsToPropDefinitions<BaseButtonParentProps>(),
    modelValue: propOptions.boolean(),
    tooltip: propOptions(is.stringU),
    tooltipDirection: propOptions(isDirectionU)
  },
  emits: {
    "update:model-value": (value: boolean) => is.boolean(value)
  },
  setup(props, { emit }) {
    validateProps<BaseButtonOwnProps>(props);

    return {
      hasTooltip: computed<boolean>(() => is.not.empty(props.tooltip)),
      onClick(): void {
        emit("update:model-value", !props.modelValue);
      },
      slotNames: useSlotsNames<BaseButtonSlots>()("default")
    };
  }
});
</script>

<template>
  <q-btn @click="onClick">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]>
      <slot :name="slotName"></slot>
    </template>
    <template #default>
      <slot :name="slotNames.default"></slot>
      <m-tooltip v-if="hasTooltip" :direction="tooltipDirection">
        {{ tooltip }}
      </m-tooltip>
    </template>
  </q-btn>
</template>
