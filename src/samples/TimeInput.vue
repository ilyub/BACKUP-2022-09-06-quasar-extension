<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-time-input",
  setup: () => {
    return {
      value1: ref<number>(),
      value2: ref<number>(),
      value3: ref<number>()
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-time-input v-model="value1" label="Optional" :max="600" />
    <m-time-input v-model="value2" label="Required" :max="600" required />
    <m-time-input
      v-model="value3"
      label="Placeholder"
      :max="600"
      placeholder="##:##"
      required
    />
    <m-time-input disable label="Disabled" :model-value="undefined" />
  </m-page-section>
</template>
