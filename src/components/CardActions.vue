<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.CardActions] */

import { parentProps, plugins, validateExpose } from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { CardActions } from "./CardActions.extras";
import type { QCardActions } from "quasar";

export default defineComponent({
  name: "m-card-actions",
  props: parentProps<CardActions.ParentProps>(),
  setup: (_props, { expose }) => {
    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<QCardActions>();

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
