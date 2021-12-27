<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "s-droppable" });
</script>

<template>
  <s-sortable
    ghost-class="droppable-ghost-class"
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
