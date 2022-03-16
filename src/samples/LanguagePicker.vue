<script lang="ts">
import { defineComponent } from "vue";

import { lang } from "@skylib/facades/es/lang";

import { useProvide } from "./useProvide";

export default defineComponent({
  name: "sample-language-picker",
  setup() {
    const { language } = useProvide();

    return { lang, language };
  }
});
</script>

<template>
  <m-language-picker :language="language" /> {{ lang.SampleWord }}
</template>
