<script lang="ts">
import { LanguagePicker } from "./LanguagePicker.extras";
import { defineComponent } from "vue";
import { settings } from "./core";

export default defineComponent({
  name: "sample-language-picker",
  setup: () => {
    const { language } = settings;

    return { lang: LanguagePicker.lang, language };
  }
});
</script>

<template>
  <m-page-section>
    <m-language-picker :language="language" />
  </m-page-section>
  <m-page-section>
    {{ lang.SampleWord }}
  </m-page-section>
</template>
