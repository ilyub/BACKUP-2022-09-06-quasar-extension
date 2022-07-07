<script lang="ts">
import { Knob } from "./Knob.extras";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-knob",
  setup: () => ({
    lang: Knob.lang,
    value1: ref(100),
    value2: ref(100)
  })
});
</script>

<template>
  <m-page-section>
    <m-knob v-model="value1" :max="1000" :step="10" />
  </m-page-section>
  <m-page-section>
    {{ lang.Leading }}
    <m-knob v-model="value2" inline :max="1000" :step="10" />
    {{ lang.trailingText }}
  </m-page-section>
</template>
