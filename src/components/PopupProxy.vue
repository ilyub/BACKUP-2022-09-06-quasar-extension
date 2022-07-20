<script lang="ts">
/* eslint-disable @skylib/custom/quasar/vue-prefer-m-popup-proxy -- Ok */

import type { Exposed, GlobalComponent } from "./api";
import { defineComponent, ref } from "vue";
import { parentProps, plugins } from "./api";
import type { PopupProxy } from "./PopupProxy.extras";
import { QPopupProxy } from "quasar";

export default defineComponent({
  name: "m-popup-proxy",
  components: {
    "q-popup-proxy": QPopupProxy as unknown as GlobalComponent<
      PopupProxy.QPopupProxyProps,
      PopupProxy.QPopupProxySlots
    >
  },
  props: {
    ...parentProps<PopupProxy.ParentProps>(),
    ...plugins.direction.props
  },
  setup: (props, { expose }) => {
    const direction = plugins.direction(props);

    const main = ref<QPopupProxy>();

    const exposed: Exposed<PopupProxy.Global> = { main };

    expose(exposed);

    return {
      anchor: direction.anchor,
      main,
      offset: direction.offset,
      self: direction.self,
      slotNames: plugins.slotNames<PopupProxy.Slots>()()
    };
  }
});
</script>

<template>
  <q-popup-proxy
    ref="main"
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
