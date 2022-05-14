<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Tooltip] */

import { disableCounter } from "./Tooltip.core";
import { Tooltip } from "./Tooltip.extras";
import { parentProps, plugins } from "./api";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "m-tooltip",
  props: {
    ...parentProps<Tooltip.ParentProps>(),
    ...plugins.useDirection.props
  },
  setup: props => {
    const {
      dirAnchor,
      dirOffset,
      dirSelf,
      dirTransitionHide,
      dirTransitionShow
    } = plugins.useDirection(props);

    return {
      dirAnchor,
      dirOffset,
      dirSelf,
      dirTransitionHide,
      dirTransitionShow,
      disabled: computed(() => disableCounter.value > 0),
      settings: Tooltip.injectSettings(),
      slotNames: plugins.useSlotNames<Tooltip.Slots>()()
    };
  }
});
</script>

<template>
  <q-tooltip
    v-if="settings.show && !disabled"
    :anchor="dirAnchor"
    class="m-tooltip"
    :delay="settings.delay"
    :offset="dirOffset"
    :self="dirSelf"
    :style="{ fontSize: settings.fontSize }"
    :transition-hide="dirTransitionHide"
    :transition-show="dirTransitionShow"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-tooltip>
</template>
