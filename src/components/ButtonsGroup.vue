<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "m-buttons-group",
  setup: (_props, { expose }) => {
    expose({});
  }
});
</script>

<template>
  <div class="m-buttons-group">
    <slot></slot>
  </div>
</template>
