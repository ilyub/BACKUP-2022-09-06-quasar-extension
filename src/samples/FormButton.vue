<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "sample-form-button" });
</script>

<template>
  <m-page-section>
    <m-form-button label="Click" @click="$q.notify('Click')" />
  </m-page-section>
</template>
