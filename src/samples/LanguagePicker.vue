<script lang="ts">
import { defineComponent, ref } from "vue";

import type { LocaleName } from "@skylib/functions/es/types/locales";

export default defineComponent({
  name: "sample-language-picker",
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
