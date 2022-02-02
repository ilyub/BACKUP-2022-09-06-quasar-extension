<script lang="ts">
import { defineComponent } from "vue";

import XSortable from "./XSortable.vue";

export default defineComponent({
  name: "x-droppable",
  components: {
    "x-sortable": XSortable
  }
});
</script>

<template>
  <x-sortable
    ghost-class="droppable-ghost-class"
    group="droppable"
    item-key="id"
    :model-value="[]"
  >
    <template #header><slot></slot></template>
  </x-sortable>
</template>

<style lang="scss" scoped>
:deep(.droppable-ghost-class) {
  display: none;
}
</style>
