<script lang="ts">
import { defineComponent, ref } from "vue";

import type { LocaleName } from "@skylib/functions/es/types/locales";

import LanguagePicker from "../components/LanguagePicker.vue";

export default defineComponent({
  name: "sample-language-picker",
  components: {
    "m-language-picker": LanguagePicker
  },
  setup() {
    return {
      language: ref<LocaleName>("en-US")
    };
  }
});
</script>

<template>
  <m-language-picker :language="language" />
</template>
