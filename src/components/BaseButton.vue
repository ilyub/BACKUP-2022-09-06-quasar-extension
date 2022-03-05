<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[BaseButton] */

import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import {
  propOptions,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  BaseButtonOwnProps,
  BaseButtonParentProps,
  BaseButtonSlots
} from "./BaseButton.extras";
import { injectDisable } from "./Switchable.extras";
import { isDirectionU } from "./Tooltip.extras";

export default defineComponent({
  name: "m-base-button",
  props: {
    ...propsToPropDefinitions<BaseButtonParentProps>(),
    disable: propOptions.boolean(),
    modelValue: propOptions.boolean(),
    tooltip: propOptions(is.stringU),
    tooltipDirection: propOptions(isDirectionU)
  },
  emits: {
    "update:modelValue": (value: boolean) => is.boolean(value)
  },
  setup(props, { emit }) {
    validateEmit<BaseButtonOwnProps>(emit);
    validateProps<BaseButtonOwnProps>(props);

    return {
      click(): void {
        emit("update:modelValue", !props.modelValue);
      },
      globalDisable: injectDisable(),
      hasTooltip: computed<boolean>(() => is.not.empty(props.tooltip)),
      slotNames: useSlotsNames<BaseButtonSlots>()("default")
    };
  }
});
</script>

<template>
  <q-btn :disable="disable || globalDisable" @click="click">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
    <template #default>
      <slot :name="slotNames.default"></slot>
      <m-tooltip v-if="hasTooltip" :direction="tooltipDirection">
        {{ tooltip }}
      </m-tooltip>
    </template>
  </q-btn>
</template>
