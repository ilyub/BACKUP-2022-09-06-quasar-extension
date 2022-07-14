<script lang="ts">
import { mdiPen, mdiPenPlus } from "@mdi/js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-icon-buttons-group",
  setup: (_prop, { expose }) => {
    expose({});

    return { mdiPen, mdiPenPlus };
  }
});
</script>

<template>
  <m-page-section>
    <m-icon-buttons-group>
      <m-icon-button :icon="mdiPen" />
      <m-icon-button :icon="mdiPenPlus" />
    </m-icon-buttons-group>
  </m-page-section>
</template>
