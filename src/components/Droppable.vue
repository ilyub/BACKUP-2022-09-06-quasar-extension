<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { DroppableProps } from "./Droppable.extras";
import Sortable from "./Sortable.vue";

export default defineComponent({
  name: "m-droppable",
  components: {
    "m-sortable": Sortable
  },
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {} as DroppableProps,
  setup(_props: SetupProps<DroppableProps>) {}
});
</script>

<template>
  <m-sortable
    ghost-class="droppable-ghost-class"
    group="droppable"
    item-key="id"
    :model-value="[]"
  >
    <template #header><slot></slot></template>
  </m-sortable>
</template>

<style lang="scss" scoped>
:deep(.droppable-ghost-class) {
  display: none;
}
</style>
