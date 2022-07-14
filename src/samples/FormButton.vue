<script lang="ts">
import { FormButton } from "./FormButton.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-form-button",
  setup: (_prop, { expose }) => {
    expose({});

    return { lang: FormButton.lang, lk: FormButton.lang.keys };
  }
});
</script>

<template>
  <m-page-section>
    <m-form-button :label="lk.Click" @click="$q.notify(lang.Click)" />
  </m-page-section>
</template>
