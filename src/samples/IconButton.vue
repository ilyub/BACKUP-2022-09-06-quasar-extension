<script lang="ts">
import { mdiAccount } from "@mdi/js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-icon-button",
  setup: () => {
    return { mdiAccount };
  }
});
</script>

<template>
  <m-page-section>
    <m-icon-button :icon="mdiAccount" @click="$q.notify('Click')" />
  </m-page-section>
</template>
