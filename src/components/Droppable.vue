<script lang="ts">
import { defineComponent } from "vue";

import Sortable from "./Sortable.vue";

export default defineComponent({
  name: "x-droppable",
  components: {
    "x-sortable": Sortable
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
