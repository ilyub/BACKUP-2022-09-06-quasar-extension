<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-numeric-input",
  setup: () => {
    return {
      value1: ref<number>(),
      value2: ref<number>(),
      value3: ref<number>(),
      value4: ref<number>()
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-numeric-input v-model="value1" label="Optional" :max="59" />
    <m-numeric-input v-model="value2" label="Required" :max="59" required />
    <m-numeric-input disable label="Disabled" :model-value="undefined" />
    <m-numeric-input
      v-model="value3"
      :big-step="15"
      label="Optional"
      :max="59"
    />
    <m-numeric-input
      v-model="value4"
      :big-step="15"
      label="Required"
      :max="59"
      required
    />
    <m-numeric-input
      :big-step="15"
      disable
      label="Disabled"
      :model-value="undefined"
    />
  </m-page-section>
</template>
