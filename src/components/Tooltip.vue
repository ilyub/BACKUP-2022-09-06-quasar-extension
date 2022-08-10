<script lang="ts">
/* eslint-disable @skylib/quasar-extension/vue/template/prefer-m-tooltip -- Ok */

import { computed, defineComponent, ref } from "vue";
import { parentProps, plugins } from "./api";
import type { Exposed } from "./api";
import type { QTooltip } from "quasar";
import { Tooltip } from "./Tooltip.extras";
import { disableCounter } from "./Tooltip.internal";

export default defineComponent({
  name: "m-tooltip",
  props: { ...parentProps<Tooltip.ParentProps>(), ...plugins.direction.props },
  setup: (props, { expose }) => {
    const direction = plugins.direction(props);

    const main = ref<QTooltip>();

    const exposed: Exposed<Tooltip.Global> = { main };

    expose(exposed);

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
