<script lang="ts">
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import { defineComponent, ref } from "vue";

import Knob from "../components/Knob.vue";

export default defineComponent({
  name: "sample-knob",
  components: {
    "x-knob": Knob
  },
  setup() {
    return {
      value: ref(100)
    };
  }
});
</script>

<template>
  <x-knob v-model="value" :max="1000" :step="10" />
</template>
