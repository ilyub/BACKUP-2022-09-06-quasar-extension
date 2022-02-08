<script lang="ts">
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import { defineComponent, ref } from "vue";

import type { numberU } from "@skylib/functions/es/types/core";

import NumericInput from "../components/NumericInput.vue";

export default defineComponent({
  name: "sample-numeric-input",
  components: {
    "x-numeric-input": NumericInput
  },
  setup() {
    return {
      value: ref<numberU>(undefined)
    };
  }
});
</script>

<template>
  <x-numeric-input v-model="value" :max="100" />
</template>
