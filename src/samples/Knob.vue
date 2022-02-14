<script lang="ts">
import { defineComponent, ref } from "vue";

import Knob from "../components/Knob.vue";

export default defineComponent({
  name: "sample-knob",
  components: {
    "m-knob": Knob
  },
  setup() {
    return {
      value: ref(100)
    };
  }
});
</script>

<template>
  <m-knob v-model="value" :max="1000" :step="10" />
</template>
