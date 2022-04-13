<script lang="ts">
import type { numberU } from "@skylib/functions/es/types/core";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-numeric-input",
  setup() {
    return { value: ref<numberU>(undefined) };
  }
});
</script>

<template>
  <m-section>
    <m-numeric-input
      v-model="value"
      :big-step="15"
      label="No undef"
      :max="59"
    />
  </m-section>
  <m-section>
    <m-numeric-input
      v-model="value"
      :big-step="15"
      can-undef
      label="Undef"
      :max="59"
    />
  </m-section>
</template>
