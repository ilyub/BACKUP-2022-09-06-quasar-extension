<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-overview",
  setup: (_prop, { expose }) => {
    expose({});
  }
});
</script>

<template>
  <m-page-section />
</template>
