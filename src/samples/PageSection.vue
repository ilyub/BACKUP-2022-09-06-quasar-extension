<script lang="ts">
import { defineComponent } from "vue";

import PageSection from "../components/PageSection.vue";

export default defineComponent({
  name: "sample-page-section",
  components: {
    "m-page-section": PageSection
  }
});
</script>

<template>
  <m-page-section class="bg-grey-3 q-pa-md">Content</m-page-section>
  <m-page-section class="bg-grey-3 q-pa-md">Content</m-page-section>
  <m-page-section class="bg-grey-3 q-pa-md">Content</m-page-section>
</template>
