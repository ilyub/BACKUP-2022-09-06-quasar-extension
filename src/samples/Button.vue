<script lang="ts">
import { Button } from "./Button.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-button",
  setup: (_prop, { expose }) => {
    const { lang } = Button;

    const lk = lang.keys;

    expose({});

    return { lang, lk };
  }
});
</script>

<template>
  <m-page-section>
    <m-button :label="lk.Click" @click="$q.notify(lang.Click)" />
  </m-page-section>
</template>
