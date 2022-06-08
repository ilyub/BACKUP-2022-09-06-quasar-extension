<script lang="ts">
import { Button } from "./Button.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-button",
  setup: () => {
    return { lang: Button.lang, lk: Button.lang.keys };
  }
});
</script>

<template>
  <m-page-section>
    <m-button :label="lk.Click" @click="$q.notify(lang.Click)" />
  </m-page-section>
</template>
