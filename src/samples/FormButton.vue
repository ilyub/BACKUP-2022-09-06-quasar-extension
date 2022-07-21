<script lang="ts">
import { FormButton } from "./FormButton.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-form-button",
  setup: (_prop, { expose }) => {
    const { lang } = FormButton;

    const lk = lang.keys;

    expose();

    return { lang, lk };
  }
});
</script>

<template>
  <m-page-section>
    <m-form-button :label="lk.Click" @click="$q.notify(lang.Click)" />
  </m-page-section>
</template>
