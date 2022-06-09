<script lang="ts">
import { ExpansionItem } from "./ExpansionItem.extras";
import { mdiClose } from "@mdi/js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-expansion-item",
  setup: () => {
    return { icon: mdiClose, lk: ExpansionItem.lang.keys };
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
      :label="lk.Label"
    >
      <m-item :caption="lk.Item1" :icon="icon" />
      <q-separator />
      <m-item :caption="lk.Item2" :icon="icon" />
    </m-expansion-item>
  </m-page-section>
</template>
