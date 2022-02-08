<script lang="ts">
import { defineComponent } from "vue";

import PageSection from "../components/PageSection.vue";

export default defineComponent({
  name: "sample-page-section",
  components: {
    "x-page-section": PageSection
  }
});
</script>

<template>
  <x-page-section class="bg-grey-3 q-pa-md">Content</x-page-section>
  <x-page-section class="bg-grey-3 q-pa-md">Content</x-page-section>
  <x-page-section class="bg-grey-3 q-pa-md">Content</x-page-section>
</template>
