<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "m-icon-buttons-group",
  setup: (_prop, { expose }) => {
    expose({});
  }
});
</script>

<template>
  <div class="m-icon-buttons-group">
    <slot></slot>
  </div>
</template>
