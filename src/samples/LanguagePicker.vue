<script lang="ts">
import { useProvide } from "./useProvide";
import { lang } from "@skylib/facades";
import { defineComponent } from "vue";

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
