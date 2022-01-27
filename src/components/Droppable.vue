<script lang="ts">
import { defineComponent } from "vue";

import Sortable from "./Sortable.vue";

export default defineComponent({
  name: "s-droppable",
  components: {
    "s-sortable": Sortable
  }
});
</script>

<template>
  <s-sortable
    ghost-class="droppable-ghost-class"
    group="droppable"
    item-key="id"
    :model-value="[]"
  >
    <template #header><slot></slot></template>
  </s-sortable>
</template>

<style lang="scss" scoped>
:deep(.droppable-ghost-class) {
  display: none;
}
</style>
