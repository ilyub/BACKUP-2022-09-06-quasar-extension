<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.CardSection] */

import { parentProps, plugins } from "./api";
import { QCardSection } from "quasar";
import { defineComponent, ref } from "vue";
import type { CardSection } from "./CardSection.extras";

export default defineComponent({
  name: "m-card-section",
  props: parentProps<CardSection.ParentProps>(),
  setup: () => {
    return {
      main: ref(QCardSection),
      slotNames: plugins.useSlotNames<CardSection.Slots>()()
    };
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
