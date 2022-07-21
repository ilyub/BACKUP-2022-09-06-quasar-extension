<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "m-indent",
  setup: (_props, { expose }) => {
    expose();
  }
});
</script>

<template>
  <div class="m-indent">
    <slot></slot>
  </div>
</template>
