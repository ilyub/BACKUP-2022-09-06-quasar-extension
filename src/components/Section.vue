<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent } from "vue";
import type { Section } from "./Section.extras";

export default defineComponent({
  name: "m-section",
  props: parentProps<Section.ParentProps>(),
  setup: () => {
    return { slotNames: plugins.useSlotNames<Section.Slots>()() };
  }
});
</script>

<template>
  <m-switchable class="m-section">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
