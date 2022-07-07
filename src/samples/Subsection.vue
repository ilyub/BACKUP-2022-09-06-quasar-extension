<script lang="ts">
import { Subsection } from "./Subsection.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-subsection",
  setup: () => ({ lang: Subsection.lang })
});
</script>

<template>
  <m-page-section>
    <m-subsection class="bg-grey-3 q-pa-md">{{ lang.Content }}</m-subsection>
    <m-subsection class="bg-grey-3 q-pa-md">{{ lang.Content }}</m-subsection>
    <m-subsection class="bg-grey-3 q-pa-md">{{ lang.Content }}</m-subsection>
  </m-page-section>
</template>
