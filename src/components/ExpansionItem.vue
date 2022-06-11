<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.ExpansionItem] */

import { parentProps, plugins, validateExpose } from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { ExpansionItem } from "./ExpansionItem.extras";
import type { QExpansionItem } from "quasar";

export default defineComponent({
  name: "m-expansion-item",
  props: {
    ...parentProps<ExpansionItem.ParentProps>(),
    ...plugins.langProps.props("label")
  },
  setup: (props, { expose }) => {
    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const { label } = plugins.langProps(props, "label");

    const main = ref<QExpansionItem>();

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
