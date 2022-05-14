<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "sample-button" });
</script>

<template>
  <m-page-section>
    <m-button label="Click" @click="$q.notify('Click')" />
  </m-page-section>
</template>
