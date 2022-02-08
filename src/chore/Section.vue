<script lang="ts">
import { defineComponent } from "vue";

import Section from "../components/Section.vue";

export default defineComponent({
  name: "sample-section",
  components: {
    "x-section": Section
  },
  setup() {}
});
</script>

<template>
  <x-section class="bg-grey-3 q-pa-md">Content</x-section>
  <x-section class="bg-grey-3 q-pa-md">Content</x-section>
  <x-section class="bg-grey-3 q-pa-md">Content</x-section>
</template>
