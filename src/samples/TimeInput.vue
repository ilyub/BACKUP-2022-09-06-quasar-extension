<script lang="ts">
import type { numberU } from "@skylib/functions/es/types/core";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-time-input",
  setup() {
    return { value: ref<numberU>(undefined) };
  }
});
</script>

<template>
  <m-time-input v-model="value" label="Label" :max="600" />
</template>
