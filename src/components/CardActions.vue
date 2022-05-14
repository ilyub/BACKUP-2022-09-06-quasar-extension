<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.CardActions] */

import { parentProps, plugins } from "./api";
import { defineComponent } from "vue";
import type { CardActions } from "./CardActions.extras";

export default defineComponent({
  name: "m-card-actions",
  props: parentProps<CardActions.ParentProps>(),
  setup: () => {
    return { slotNames: plugins.useSlotNames<CardActions.Slots>()() };
  }
});
</script>

<template>
  <q-card-actions class="m-card-actions">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-card-actions>
</template>
