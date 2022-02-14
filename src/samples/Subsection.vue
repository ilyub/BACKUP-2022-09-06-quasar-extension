<script lang="ts">
import { defineComponent } from "vue";

import Subsection from "../components/Subsection.vue";

export default defineComponent({
  name: "sample-subsection",
  components: {
    "m-subsection": Subsection
  }
});
</script>

<template>
  <m-subsection class="bg-grey-3 q-pa-md">Content</m-subsection>
  <m-subsection class="bg-grey-3 q-pa-md">Content</m-subsection>
  <m-subsection class="bg-grey-3 q-pa-md">Content</m-subsection>
</template>
