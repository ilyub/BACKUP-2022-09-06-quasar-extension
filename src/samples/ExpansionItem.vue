<script lang="ts">
import { defineComponent } from "vue";
import { mdiClose } from "@mdi/js";

export default defineComponent({
  name: "sample-expansion-item",
  setup() {
    return { icon: mdiClose };
  }
});
</script>

<template>
  <m-expansion-item
    dark
    default-opened
    :duration="200"
    header-class="bg-primary q-pa-md"
    :icon="icon"
    label="Label"
  >
    <m-list-item caption="Menu item 1" :icon="icon" />
    <q-separator />
    <m-list-item caption="Menu item 2" :icon="icon" />
  </m-expansion-item>
</template>
