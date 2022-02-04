<script lang="ts">
import type { QCardActions } from "quasar";
import { defineComponent } from "vue";

import type { PropsToPropOptions } from "./api";

export default defineComponent({
  name: "x-card-actions",
  props: {} as PropsToPropOptions<QCardActions>
});
</script>

<template>
  <q-card-actions class="q-pt-none">
    <slot></slot>
  </q-card-actions>
</template>
