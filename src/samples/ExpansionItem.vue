<script lang="ts">
import { ExpansionItem } from "./ExpansionItem.extras";
import { defineComponent } from "vue";
import { mdiClose } from "@mdi/js";

export default defineComponent({
  name: "sample-expansion-item",
  setup: (_prop, { expose }) => {
    const { lang } = ExpansionItem;

    const lk = lang.keys;

    expose();

    return { icon: mdiClose, lk };
  }
});
</script>

<template>
  <m-page-section>
    <m-expansion-item
      :caption="lk.Subtitle"
      dark
      default-opened
      :duration="200"
      header-class="bg-primary q-pa-md"
      :icon="icon"
      :label="lk.ExpansionItem"
    >
      <m-item :caption="lk.Item1" :icon="icon" />
      <q-separator />
      <m-item :caption="lk.Item2" :icon="icon" />
    </m-expansion-item>
  </m-page-section>
</template>
