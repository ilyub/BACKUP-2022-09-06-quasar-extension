<script lang="ts">
import { defineComponent, ref } from "vue";

import type { stringU } from "@skylib/functions/es/types/core";

export default defineComponent({
  name: "sample-input",
  setup() {
    return {
      inputValue1: ref<stringU>(undefined),
      inputValue2: ref<stringU>(undefined)
    };
  }
});
</script>

<template>
  <m-input v-model="inputValue1" />
  <m-input v-model="inputValue2" clearable />
</template>
