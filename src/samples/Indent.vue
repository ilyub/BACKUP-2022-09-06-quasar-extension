<script lang="ts">
import { defineComponent } from "vue";

import Indent from "../components/Indent.vue";

export default defineComponent({
  name: "sample-indent",
  components: {
    "m-indent": Indent
  },
  setup() {}
});
</script>

<template>
  <div class="bg-grey-3 q-pa-md">
    Outer
    <m-indent class="bg-grey-5">Inner</m-indent>
  </div>
</template>
