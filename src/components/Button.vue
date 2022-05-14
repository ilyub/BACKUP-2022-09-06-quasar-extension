<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent } from "vue";
import type { Button } from "./Button.extras";

export default defineComponent({
  name: "m-button",
  props: parentProps<Button.ParentProps>(),
  setup: () => {
    return { slotNames: plugins.useSlotNames<Button.Slots>()() };
  }
});
</script>

<template>
  <m-base-button class="m-button" color="primary">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-base-button>
</template>
