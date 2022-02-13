<script lang="ts">
import { defineComponent } from "vue";

import Indent from "../components/Indent.vue";

export default defineComponent({
  name: "sample-indent",
  components: {
    "x-indent": Indent
  },
  setup() {}
});
</script>

<template>
  <div class="bg-grey-3 q-pa-md">
    Outer
    <x-indent class="bg-grey-5">Inner</x-indent>
  </div>
</template>
