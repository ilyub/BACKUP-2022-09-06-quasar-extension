<script lang="ts">
import { Item } from "./Item.extras";
import { mdiAccount, mdiPen } from "@mdi/js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-item",
  setup: () => ({
    lang: Item.lang,
    lk: Item.lang.keys,
    mdiAccount,
    mdiPen
  })
});
</script>

<template>
  <m-page-section>
    <q-list>
      <q-separator />
      <m-item :caption="lk.Item1" :icon="mdiAccount" />
      <q-separator />
      <m-item>
        <template #caption>{{ lang.Item2 }}</template>
        <template #icon><q-icon :name="mdiPen" /></template>
      </m-item>
      <q-separator />
    </q-list>
  </m-page-section>
</template>
