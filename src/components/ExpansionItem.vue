<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.ExpansionItem] */

import { parentProps, plugins } from "./api";
import { QExpansionItem } from "quasar";
import { defineComponent, ref } from "vue";
import type { ExpansionItem } from "./ExpansionItem.extras";

export default defineComponent({
  name: "m-expansion-item",
  props: {
    ...parentProps<ExpansionItem.ParentProps>(),
    ...plugins.useLabel.props
  },
  setup: props => {
    const { label } = plugins.useLabel(props);

    return {
      label,
      main: ref(QExpansionItem),
      slotNames: plugins.useSlotNames<ExpansionItem.Slots>()()
    };
  }
});
</script>

<template>
  <q-expansion-item ref="main" class="m-expansion-item" :label="label">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-expansion-item>
</template>
