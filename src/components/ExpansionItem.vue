<script lang="ts">
/* skylib/eslint-plugin disable @skylib/quasar-extension/disallow-by-regexp[ExpansionItem] */

import { parentProps, plugins, validateExpose } from "./api";
import { defineComponent, ref } from "vue";
import type { ExpansionItem } from "./ExpansionItem.extras";
import type { QExpansionItem } from "quasar";

export default defineComponent({
  name: "m-expansion-item",
  props: {
    ...parentProps<ExpansionItem.ParentProps>(),
    ...plugins.langProps.props("label")
  },
  setup: (props, { expose }) => {
    const { label } = plugins.langProps(props, "label");

    const main = ref<QExpansionItem>();

    const exposed = { main };

    validateExpose<ExpansionItem.Global>(expose, exposed);

    return {
      label,
      main,
      slotNames: plugins.slotNames<ExpansionItem.Slots>()()
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
