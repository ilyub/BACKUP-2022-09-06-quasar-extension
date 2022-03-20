<script lang="ts">
import { defineComponent } from "vue";

import { propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  DroppableOwnProps,
  DroppableParentProps,
  DroppableSlots
} from "./Droppable.extras";

export default defineComponent({
  name: "m-droppable",
  props: propsToPropDefinitions<DroppableParentProps>(),
  setup(props) {
    validateProps<DroppableOwnProps>(props);

    return {
      slotNames: useSlotsNames<DroppableSlots>()("default")
    };
  }
});
</script>

<template>
  <m-sortable
    :ghost-class="$style.droppableGhostClass"
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

<style lang="scss" module>
.droppableGhostClass {
  display: none;
}
</style>
