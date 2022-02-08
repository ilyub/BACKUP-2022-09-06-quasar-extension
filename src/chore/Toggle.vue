<script lang="ts">
import { defineComponent, ref } from "vue";

import Toggle from "../components/Toggle.vue";

export default defineComponent({
  name: "sample-toggle",
  components: {
    "x-toggle": Toggle
  },
  setup() {
    return {
      value: ref(false)
    };
  }
});
</script>

<template>
  <x-toggle v-model="value" />
</template>
