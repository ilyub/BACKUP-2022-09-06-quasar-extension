<script lang="ts">
/* eslint-disable @skylib/quasar-extension/vue/template/prefer-m-card-section -- Ok */

import { defineComponent, ref } from "vue";
import { parentProps, plugins } from "./api";
import type { CardSection } from "./CardSection.extras";
import type { Exposed } from "./api";
import type { QCardSection } from "quasar";

export default defineComponent({
  name: "m-card-section",
  props: parentProps<CardSection.ParentProps>(),
  setup: (_props, { expose }) => {
    const main = ref<QCardSection>();

    const exposed: Exposed<CardSection.Global> = { main };

    expose(exposed);

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
