<script lang="ts">
import { Indent } from "./Indent.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-indent",
  setup: (_prop, { expose }) => {
    const { lang } = Indent;

    expose({});

    return { lang };
  }
});
</script>

<template>
  <m-page-section class="bg-grey-3">
    {{ lang.WithoutIndent }}
    <m-indent class="bg-grey-5">{{ lang.WithIndent }}</m-indent>
  </m-page-section>
</template>
