<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent, ref } from "vue";
import type { BaseButton } from "./BaseButton.extras";
import type { Button } from "./Button.extras";

export default defineComponent({
  name: "m-button",
  props: parentProps<Button.ParentProps>(),
  setup: () => {
    return {
      main: ref<BaseButton.Global>(),
      slotNames: plugins.useSlotNames<Button.Slots>()()
    };
  }
});
</script>

<template>
  <m-base-button ref="main" class="m-button" color="primary">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-base-button>
</template>
