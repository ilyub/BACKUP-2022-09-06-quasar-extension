<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.PopupProxy] */

import { parentProps, plugins } from "./api";
import { defineComponent } from "vue";
import type { PopupProxy } from "./PopupProxy.extras";

export default defineComponent({
  name: "m-popup-proxy",
  props: {
    ...parentProps<PopupProxy.ParentProps>(),
    ...plugins.useDirection.props
  },
  setup: props => {
    const { dirAnchor, dirOffset, dirSelf } = plugins.useDirection(props);

    return {
      dirAnchor,
      dirOffset,
      dirSelf,
      slotNames: plugins.useSlotNames<PopupProxy.Slots>()()
    };
  }
});
</script>

<template>
  <q-popup-proxy
    :anchor="dirAnchor"
    class="m-popup-proxy"
    :offset="dirOffset"
    :self="dirSelf"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-popup-proxy>
</template>
