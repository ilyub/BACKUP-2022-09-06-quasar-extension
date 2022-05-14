<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.ExpansionItem] */

import { parentProps, plugins } from "./api";
import { defineComponent } from "vue";
import type { ExpansionItem } from "./ExpansionItem.extras";

export default defineComponent({
  name: "m-expansion-item",
  props: parentProps<ExpansionItem.ParentProps>(),
  setup: () => {
    return { slotNames: plugins.useSlotNames<ExpansionItem.Slots>()() };
  }
});
</script>

<template>
  <q-expansion-item class="m-expansion-item">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-expansion-item>
</template>
