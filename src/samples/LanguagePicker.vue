<script lang="ts">
import { LanguagePicker } from "./LanguagePicker.extras";
import { settings } from "./core";
import { defineComponent } from "vue";

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
