<script lang="ts">
import { parentProps } from "./api";
import { defineComponent } from "vue";
import type { Droppable } from "./Droppable.extras";

export default defineComponent({
  name: "m-droppable",
  props: parentProps<Droppable.ParentProps>()
});
</script>

<template>
  <m-sortable
    class="m-droppable"
    ghost-class="m-droppable__ghost-class"
    group="droppable"
    item-key="id"
    :model-value="[]"
    put
  >
    <template #header>
      <slot></slot>
    </template>
  </m-sortable>
</template>
