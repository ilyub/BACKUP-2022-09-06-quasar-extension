<script lang="ts">
import { mdiAccount, mdiPen } from "@mdi/js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-item",
  setup: () => {
    return { mdiAccount, mdiPen };
  }
});
</script>

<template>
  <m-page-section>
    <q-list>
      <q-separator />
      <m-item caption="Item 1" :icon="mdiAccount" />
      <q-separator />
      <m-item>
        <template #caption>Item 2</template>
        <template #icon><q-icon :name="mdiPen" /></template>
      </m-item>
      <q-separator />
    </q-list>
  </m-page-section>
</template>
