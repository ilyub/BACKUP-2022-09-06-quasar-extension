<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-toggle",
  setup: (_prop, { expose }) => {
    expose();

    return { value: ref(false) };
  }
});
</script>

<template>
  <m-page-section>
    <m-toggle v-model="value" />
  </m-page-section>
</template>
