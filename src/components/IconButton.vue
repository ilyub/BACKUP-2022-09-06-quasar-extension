<script lang="ts">
import { parentProps, plugins, validateExpose } from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { BaseButton } from "./BaseButton.extras";
import type { IconButton } from "./IconButton.extras";

export default defineComponent({
  name: "m-icon-button",
  props: parentProps<IconButton.ParentProps>(),
  setup: (_props, { expose }) => {
    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<BaseButton.Global>();

    validateExpose<IconButton.Global>(expose, exposed);

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
