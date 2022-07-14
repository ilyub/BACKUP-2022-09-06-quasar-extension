<script lang="ts">
import { IconButton } from "./IconButton.extras";
import { defineComponent } from "vue";
import { mdiAccount } from "@mdi/js";

export default defineComponent({
  name: "sample-icon-button",
  setup: (_prop, { expose }) => {
    expose({});

    return { lang: IconButton.lang, mdiAccount };
  }
});
</script>

<template>
  <m-page-section>
    <m-icon-button :icon="mdiAccount" @click="$q.notify(lang.Click)" />
  </m-page-section>
</template>
