<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent, ref } from "vue";
import type { Subsection } from "./Subsection.extras";
import type { Switchable } from "./Switchable.extras";

export default defineComponent({
  name: "m-subsection",
  props: parentProps<Subsection.ParentProps>(),
  setup: () => {
    return {
      main: ref<Switchable.Global>(),
      slotNames: plugins.useSlotNames<Subsection.Slots>()()
    };
  }
});
</script>

<template>
  <m-switchable ref="main" class="m-subsection">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
