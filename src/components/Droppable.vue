<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "s-droppable" });
</script>

<template>
  <s-sortable class="sortable" drop-zone item-key="id" :model-value="[]">
    <template #header><slot></slot></template>
  </s-sortable>
</template>

<style lang="scss" scoped>
.sortable > :deep(*:not(:first-child)) {
  /* stylelint-disable-next-line declaration-no-important */
  display: none !important;
}
</style>
