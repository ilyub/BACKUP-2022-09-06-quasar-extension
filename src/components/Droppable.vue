<script lang="ts">
import { defineComponent } from "vue";
import type {
  DroppableOwnProps,
  DroppableParentProps,
  DroppableSlots
} from "./Droppable.extras";
import { propsToPropDefinitions, validateProps, useSlotsNames } from "./api";

export default defineComponent({
  name: "m-droppable",
  props: propsToPropDefinitions<DroppableParentProps>(),
  setup(props) {
    validateProps<DroppableOwnProps>(props);

    return { slotNames: useSlotsNames<DroppableSlots>()("default") };
  }
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
    <template v-if="$slots[slotNames.default]" #header>
      <slot :name="slotNames.default"></slot>
    </template>
  </m-sortable>
</template>
