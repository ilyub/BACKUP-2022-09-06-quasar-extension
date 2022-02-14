<script lang="ts">
import { defineComponent, ref } from "vue";

import Toggle from "../components/Toggle.vue";

export default defineComponent({
  name: "sample-toggle",
  components: {
    "m-toggle": Toggle
  },
  setup() {
    return {
      value: ref(false)
    };
  }
});
</script>

<template>
  <m-toggle v-model="value" />
</template>
