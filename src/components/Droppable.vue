<script lang="ts">
import { parentProps } from "./api";
import { defineComponent, ref } from "vue";
import type { Droppable } from "./Droppable.extras";
import type { Sortable } from "./Sortable.extras";

export default defineComponent({
  name: "m-droppable",
  props: parentProps<Droppable.ParentProps>(),
  setup: () => {
    return { main: ref<Sortable.Global>() };
  }
});
</script>

<template>
  <m-sortable
    ref="main"
    class="m-droppable"
    ghost-class="m-droppable__ghost-class"
    group="droppable"
    item-key="id"
    :model-value="[]"
    put
  >
    <template #header="data">
      <slot v-bind="data ?? {}"></slot>
    </template>
  </m-sortable>
</template>
