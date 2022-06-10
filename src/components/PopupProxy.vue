<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.PopupProxy] */

import { parentProps, plugins, validateExpose } from "./api";
import { as } from "@skylib/functions";
import { QPopupProxy } from "quasar";
import { computed, defineComponent, ref } from "vue";
import type { PopupProxy } from "./PopupProxy.extras";
import type { GlobalComponent } from "./api";

export default defineComponent({
  name: "m-popup-proxy",
  components: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
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

    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<QPopupProxy>();

    validateExpose<PopupProxy.Global>(expose, exposed);

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
