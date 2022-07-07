<script lang="ts">
import { Section } from "./Section.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-section",
  setup: () => ({ lang: Section.lang })
});
</script>

<template>
  <m-page-section>
    <m-section class="bg-grey-3 q-pa-md">{{ lang.Content }}</m-section>
    <m-section class="bg-grey-3 q-pa-md">{{ lang.Content }}</m-section>
    <m-section class="bg-grey-3 q-pa-md">{{ lang.Content }}</m-section>
  </m-page-section>
</template>
