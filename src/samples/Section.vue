<script lang="ts">
import { Section } from "./Section.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-section",
  setup: (_prop, { expose }) => {
    const { lang } = Section;

    expose();

    return { lang };
  }
});
</script>

<template>
  <m-page-section>
    <m-section class="bg-grey-3 q-pa-md">{{ lang.Content }}</m-section>
    <m-section class="bg-grey-3 q-pa-md">{{ lang.Content }}</m-section>
    <m-section class="bg-grey-3 q-pa-md">{{ lang.Content }}</m-section>
  </m-page-section>
</template>
