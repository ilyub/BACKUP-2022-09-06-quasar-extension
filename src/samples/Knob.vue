<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-knob",
  setup() {
    return { value: ref(100) };
  }
});
</script>

<template>
  <m-knob v-model="value" :max="1000" :step="10" />
</template>
