<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Droppable } from "./Droppable.extras";
import type { Exposed } from "./api";
import type { Sortable } from "./Sortable.extras";
import { parentProps } from "./api";

export default defineComponent({
  name: "m-droppable",
  props: parentProps<Droppable.ParentProps>(),
  setup: (_props, { expose }) => {
    const main = ref<Sortable.Global>();

    const exposed: Exposed<Sortable.Global> = { main };

    expose(exposed);

    return { main };
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
