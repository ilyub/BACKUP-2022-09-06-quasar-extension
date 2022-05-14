<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent } from "vue";
import type { IconButton } from "./IconButton.extras";

export default defineComponent({
  name: "m-icon-button",
  props: parentProps<IconButton.ParentProps>(),
  setup: () => {
    return { slotNames: plugins.useSlotNames<IconButton.Slots>()() };
  }
});
</script>

<template>
  <m-base-button class="m-icon-button" flat round>
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-base-button>
</template>
