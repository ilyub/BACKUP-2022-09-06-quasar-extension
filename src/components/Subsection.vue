<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent } from "vue";
import type { Subsection } from "./Subsection.extras";

export default defineComponent({
  name: "m-subsection",
  props: parentProps<Subsection.ParentProps>(),
  setup: () => {
    return { slotNames: plugins.useSlotNames<Subsection.Slots>()() };
  }
});
</script>

<template>
  <m-switchable class="m-subsection">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
