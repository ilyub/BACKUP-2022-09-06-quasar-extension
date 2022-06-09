<script lang="ts">
import { Indent } from "./Indent.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-indent",
  setup: () => {
    return { lang: Indent.lang };
  }
});
</script>

<template>
  <m-page-section class="bg-grey-3">
    {{ lang.Outer }}
    <m-indent class="bg-grey-5">{{ lang.Inner }}</m-indent>
  </m-page-section>
</template>
