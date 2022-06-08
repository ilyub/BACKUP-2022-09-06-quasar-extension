<script lang="ts">
import { IconButton } from "./IconButton.extras";
import { mdiAccount } from "@mdi/js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-icon-button",
  setup: () => {
    return { lang: IconButton.lang, mdiAccount };
  }
});
</script>

<template>
  <m-page-section>
    <m-icon-button :icon="mdiAccount" @click="$q.notify(lang.Click)" />
  </m-page-section>
</template>
