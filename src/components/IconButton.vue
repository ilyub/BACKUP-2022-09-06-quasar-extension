<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent, ref } from "vue";
import type { BaseButton } from "./BaseButton.extras";
import type { IconButton } from "./IconButton.extras";

export default defineComponent({
  name: "m-icon-button",
  props: parentProps<IconButton.ParentProps>(),
  setup: () => {
    return {
      main: ref<BaseButton.Global>(),
      slotNames: plugins.slotNames<IconButton.Slots>()()
    };
  }
});
</script>

<template>
  <m-base-button ref="main" class="m-icon-button" flat round>
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-base-button>
</template>
