<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "m-buttons-group" });
</script>

<template>
  <div class="m-buttons-group">
    <slot name="default"></slot>
  </div>
</template>
