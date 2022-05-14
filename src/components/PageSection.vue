<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent } from "vue";
import type { PageSection } from "./PageSection.extras";

export default defineComponent({
  name: "m-page-section",
  props: parentProps<PageSection.ParentProps>(),
  setup: () => {
    return { slotNames: plugins.useSlotNames<PageSection.Slots>()() };
  }
});
</script>

<template>
  <m-switchable class="m-page-section">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
