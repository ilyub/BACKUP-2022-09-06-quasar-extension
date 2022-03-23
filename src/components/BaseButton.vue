<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[BaseButton] */

import { computed, defineComponent, ref } from "vue";

import { handlePromise } from "@skylib/facades/es/handlePromise";
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
import { isAsyncClickU } from "./BaseButton.extras";
import { injectDisable } from "./Switchable.extras";
import { isDirectionU } from "./Tooltip.extras";

export default defineComponent({
  name: "m-base-button",
  props: {
    ...propsToPropDefinitions<BaseButtonParentProps>(),
    ...confirmedClickProps,
    asyncClick: propOptions(isAsyncClickU),
    disable: propOptions.boolean(),
    loading: propOptions.boolean(),
    tooltip: propOptions(is.stringU),
    tooltipDirection: propOptions(isDirectionU)
  },
  emits: confirmedClickEmits,
  setup(props, { emit }) {
    validateProps<BaseButtonOwnProps>(props);

    const { confirmedClick } = useConfirmedClick(props, emit);

    const asyncClickActive = ref(false);

    return {
      asyncClickActive,
      click(): void {
        confirmedClick();

        const asyncClick = props.asyncClick;

        if (asyncClick)
          handlePromise.silent(async () => {
            asyncClickActive.value = true;

            try {
              await asyncClick();
            } finally {
              asyncClickActive.value = false;
            }
          });
      },
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
    :loading="loading || asyncClickActive"
    @click="click"
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
