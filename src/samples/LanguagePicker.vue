<script lang="ts">
import { useInjections } from "./core";
import { lang } from "@skylib/facades";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-language-picker",
  setup: () => {
    const { language } = useInjections();

    return { lang, language };
  }
});
</script>

<template>
  <m-page-section>
    <m-language-picker :language="language" /> {{ lang.Confirm }}
  </m-page-section>
</template>
