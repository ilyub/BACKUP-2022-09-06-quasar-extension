<script lang="ts">
import { defineComponent } from "vue";

import Section from "../components/Section.vue";

export default defineComponent({
  name: "sample-section",
  components: {
    "m-section": Section
  },
  setup() {}
});
</script>

<template>
  <m-section class="bg-grey-3 q-pa-md">Content</m-section>
  <m-section class="bg-grey-3 q-pa-md">Content</m-section>
  <m-section class="bg-grey-3 q-pa-md">Content</m-section>
</template>
