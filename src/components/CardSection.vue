<script lang="ts">
/* eslint-disable @skylib/no-restricted-syntax/vue-prefer-m-card-section -- Ok */

import { parentProps, plugins, validateExpose } from "./api";
import { defineComponent, ref } from "vue";
import type { CardSection } from "./CardSection.extras";
import type { QCardSection } from "quasar";

export default defineComponent({
  name: "m-card-section",
  props: parentProps<CardSection.ParentProps>(),
  setup: (_props, { expose }) => {
    const main = ref<QCardSection>();

    const exposed = { main };

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
