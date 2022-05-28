<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.BaseButton] */

import { prop, parentProps, validateProps, plugins, injections } from "./api";
import { is } from "@skylib/functions";
import { QBtn } from "quasar";
import { computed, defineComponent, ref } from "vue";
import type { BaseButton } from "./BaseButton.extras";

export default defineComponent({
  name: "m-base-button",
  props: {
    ...parentProps<BaseButton.ParentProps>(),
    ...plugins.useAsyncClick.props,
    ...plugins.useConfirmedClick.props,
    disable: prop.boolean(),
    loading: prop.boolean(),
    tooltip: prop<BaseButton.Props["tooltip"]>(),
    tooltipDirection: prop<BaseButton.Props["tooltipDirection"]>()
  },
  setup: props => {
    validateProps<BaseButton.OwnProps>(props);

    const asyncClick = plugins.useAsyncClick(props);

    const confirmedClick = plugins.useConfirmedClick(props);

    return {
      asyncClick,
      click: (): void => {
        asyncClick();
        confirmedClick();
      },
      globalDisable: injections.globalDisable.inject(),
      hasTooltip: computed(() => is.not.empty(props.tooltip)),
      main: ref(QBtn),
      slotNames: plugins.useSlotNames<BaseButton.Slots>()("default")
    };
  }
});
</script>

<template>
  <q-btn
    ref="main"
    class="m-base-button"
    :disable="disable || globalDisable"
    :loading="loading || asyncClick.active.value"
    @click="click"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #default>
      <slot :name="slotNames.default"></slot>
      <m-tooltip v-if="hasTooltip" :direction="tooltipDirection">
        {{ tooltip }}
      </m-tooltip>
    </template>
  </q-btn>
</template>
