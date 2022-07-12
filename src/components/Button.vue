<script lang="ts">
import { defineComponent, ref } from "vue";
import { parentProps, plugins } from "./api";
import type { BaseButton } from "./BaseButton.extras";
import type { Button } from "./Button.extras";
import type { SetupExposed } from "./api";

export default defineComponent({
  name: "m-button",
  props: parentProps<Button.ParentProps>(),
  setup: (_props, { expose }) => {
    const main = ref<BaseButton.Global>();

    const exposed: SetupExposed<Button.Global> = { main };

    expose(exposed);

    return { main, slotNames: plugins.slotNames<Button.Slots>()() };
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
