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
    const direction = plugins.useDirection(props);

    return {
      anchor: direction.anchor,
      offset: direction.offset,
      self: direction.self,
      slotNames: plugins.useSlotNames<PopupProxy.Slots>()()
    };
  }
});
</script>

<template>
  <q-popup-proxy
    :anchor="anchor"
    class="m-popup-proxy"
    :offset="offset"
    :self="self"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-popup-proxy>
</template>
