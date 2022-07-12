<script lang="ts">
import { defineComponent, ref } from "vue";
import { parentProps, plugins } from "./api";
import type { BaseButton } from "./BaseButton.extras";
import type { IconButton } from "./IconButton.extras";
import type { SetupExposed } from "./api";

export default defineComponent({
  name: "m-icon-button",
  props: parentProps<IconButton.ParentProps>(),
  setup: (_props, { expose }) => {
    const main = ref<BaseButton.Global>();

    const exposed: SetupExposed<IconButton.Global> = { main };

    expose(exposed);

    return { main, slotNames: plugins.slotNames<IconButton.Slots>()() };
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
