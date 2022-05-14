<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-knob",
  setup: () => {
    return { value: ref(100) };
  }
});
</script>

<template>
  <m-page-section>
    <m-knob v-model="value" :max="1000" :step="10" />
  </m-page-section>
  <m-page-section>
    Text <m-knob v-model="value" inline :max="1000" :step="10" /> text
  </m-page-section>
</template>
