<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.CardActions] */

import { parentProps, plugins, validateExpose } from "./api";
import { defineComponent, ref } from "vue";
import type { CardActions } from "./CardActions.extras";
import type { QCardActions } from "quasar";

export default defineComponent({
  name: "m-card-actions",
  props: parentProps<CardActions.ParentProps>(),
  setup: (_props, { expose }) => {
    const main = ref<QCardActions>();

    const exposed = { main };

    validateExpose<CardActions.Global>(expose, exposed);

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
