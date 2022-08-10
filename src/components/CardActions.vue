<script lang="ts">
/* eslint-disable @skylib/quasar-extension/vue/template/prefer-m-card-actions -- Ok */

import { defineComponent, ref } from "vue";
import { parentProps, plugins } from "./api";
import type { CardActions } from "./CardActions.extras";
import type { Exposed } from "./api";
import type { QCardActions } from "quasar";

export default defineComponent({
  name: "m-card-actions",
  props: parentProps<CardActions.ParentProps>(),
  setup: (_props, { expose }) => {
    const main = ref<QCardActions>();

    const exposed: Exposed<CardActions.Global> = { main };

    expose(exposed);

    return { main, slotNames: plugins.slotNames<CardActions.Slots>()() };
  }
});
</script>

<template>
  <q-card-actions ref="main" class="m-card-actions">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-card-actions>
</template>
