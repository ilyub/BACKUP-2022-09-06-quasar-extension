<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-input",
  setup: () => {
    return { value1: ref<string>(), value2: ref<string>() };
  }
});
</script>

<template>
  <m-page-section>
    <m-input v-model="value1" />
    <m-input v-model="value2" clearable />
  </m-page-section>
</template>
