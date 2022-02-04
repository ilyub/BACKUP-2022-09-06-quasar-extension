<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "x-card-actions"
});
</script>

<template>
  <q-card-actions class="q-pt-none">
    <slot></slot>
  </q-card-actions>
</template>
