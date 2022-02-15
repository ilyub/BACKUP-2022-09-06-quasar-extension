<script lang="ts">
import { defineComponent, ref } from "vue";

import type { numberU } from "@skylib/functions/es/types/core";

export default defineComponent({
  name: "sample-numeric-input",
  setup() {
    return {
      value: ref<numberU>(undefined)
    };
  }
});
</script>

<template>
  <m-numeric-input v-model="value" :max="100" />
</template>
