<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "x-card-section"
});
</script>

<template>
  <q-card-section>
    <slot></slot>
  </q-card-section>
</template>
