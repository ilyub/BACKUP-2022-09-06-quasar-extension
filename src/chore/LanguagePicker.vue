<script lang="ts">
import { defineComponent, ref } from "vue";

import type { LocaleName } from "@skylib/functions/es/types/locales";

import LanguagePicker from "../components/LanguagePicker.vue";

export default defineComponent({
  name: "sample-language-picker",
  components: {
    "x-language-picker": LanguagePicker
  },
  setup() {
    return {
      language: ref<LocaleName>("en-US")
    };
  }
});
</script>

<template>
  <x-language-picker :language="language" />
</template>
