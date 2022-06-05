<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-knob",
  setup: () => {
    return { value1: ref(100), value2: ref(100) };
  }
});
</script>

<template>
  <m-page-section>
    <m-knob v-model="value1" :max="1000" :step="10" />
  </m-page-section>
  <m-page-section>
    Leading
    <m-knob v-model="value2" inline :max="1000" :step="10" />
    trailing text
  </m-page-section>
</template>
