<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.CardSection] */

import { parentProps, plugins, validateExpose } from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { CardSection } from "./CardSection.extras";
import type { QCardSection } from "quasar";

export default defineComponent({
  name: "m-card-section",
  props: parentProps<CardSection.ParentProps>(),
  setup: (_props, { expose }) => {
    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<QCardSection>();

    validateExpose<CardSection.Global>(expose, exposed);

    return { main, slotNames: plugins.slotNames<CardSection.Slots>()() };
  }
});
</script>

<template>
  <q-card-section ref="main" class="m-card-section">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-card-section>
</template>
