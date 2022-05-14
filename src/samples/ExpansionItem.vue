<script lang="ts">
import { mdiClose } from "@mdi/js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-expansion-item",
  setup: () => {
    return { icon: mdiClose };
  }
});
</script>

<template>
  <m-page-section>
    <m-expansion-item
      dark
      default-opened
      :duration="200"
      header-class="bg-primary q-pa-md"
      :icon="icon"
      label="Label"
    >
      <m-item caption="Menu item 1" :icon="icon" />
      <q-separator />
      <m-item caption="Menu item 2" :icon="icon" />
    </m-expansion-item>
  </m-page-section>
</template>
