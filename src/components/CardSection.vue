<script lang="ts">
import type { QCardSection } from "quasar";
import { defineComponent } from "vue";

import type { PropsToPropOptions } from "./api";

export default defineComponent({
  name: "x-card-section",
  props: {} as PropsToPropOptions<QCardSection>
});
</script>

<template>
  <q-card-section>
    <slot></slot>
  </q-card-section>
</template>
