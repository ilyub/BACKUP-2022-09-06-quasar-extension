<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[BaseButton] */

import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions, propsToPropDefinitions, validateProps } from "./api";
import {
  confirmedClickEmits,
  confirmedClickProps,
  useConfirmedClick
} from "./api/confirmedClickModule";
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
    ...confirmedClickProps,
    disable: propOptions.boolean(),
    tooltip: propOptions(is.stringU),
    tooltipDirection: propOptions(isDirectionU)
  },
  emits: confirmedClickEmits,
  setup(props, { emit }) {
    validateProps<BaseButtonOwnProps>(props);

    const { confirmedClick } = useConfirmedClick(props, emit);

    return {
      confirmedClick,
      globalDisable: injectDisable(),
      hasTooltip: computed<boolean>(() => is.not.empty(props.tooltip)),
      slotNames: useSlotsNames<BaseButtonSlots>()("default")
    };
  }
});
</script>

<template>
  <q-btn
    class="m-base-button"
    :disable="disable || globalDisable"
    @click="confirmedClick"
  >
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
