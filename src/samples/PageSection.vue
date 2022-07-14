<script lang="ts">
import { PageSection } from "./PageSection.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-page-section",
  setup: (_prop, { expose }) => {
    expose({});

    return { lang: PageSection.lang };
  }
});
</script>

<template>
  <m-page-section class="bg-grey-3 q-pa-md">{{ lang.Content }}</m-page-section>
  <m-page-section class="bg-grey-3 q-pa-md">{{ lang.Content }}</m-page-section>
  <m-page-section class="bg-grey-3 q-pa-md">{{ lang.Content }}</m-page-section>
</template>
