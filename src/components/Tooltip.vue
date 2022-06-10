<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Tooltip] */

import { disableCounter } from "./Tooltip.core";
import { Tooltip } from "./Tooltip.extras";
import { parentProps, plugins, validateExpose } from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { QTooltip } from "quasar";

export default defineComponent({
  name: "m-tooltip",
  props: { ...parentProps<Tooltip.ParentProps>(), ...plugins.direction.props },
  setup: (props, { expose }) => {
    const direction = plugins.direction(props);

    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<QTooltip>();

    validateExpose<Tooltip.Global>(expose, exposed);

    return {
      anchor: direction.anchor,
      disabled: computed(() => disableCounter.value > 0),
      main,
      offset: direction.offset,
      self: direction.self,
      settings: Tooltip.injectSettings(),
      slotNames: plugins.slotNames<Tooltip.Slots>()(),
      transitionHide: direction.transitionHide,
      transitionShow: direction.transitionShow
    };
  }
});
</script>

<template>
  <q-tooltip
    v-if="settings.show && !disabled"
    ref="main"
    :anchor="anchor"
    class="m-tooltip"
    :delay="settings.delay"
    :offset="offset"
    :self="self"
    :style="{ fontSize: settings.fontSize }"
    :transition-hide="transitionHide"
    :transition-show="transitionShow"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-tooltip>
</template>
