<script lang="ts">
import { defineComponent, ref } from "vue";
import { parentProps, plugins } from "./api";
import type { Exposed } from "./api";
import type { Subsection } from "./Subsection.extras";

export default defineComponent({
  name: "m-subsection",
  props: parentProps<Subsection.ParentProps>(),
  setup: (_props, { expose }) => {
    const main = ref<Subsection.Global>();

    const exposed: Exposed<Subsection.Global> = { main };

    expose(exposed);

    return { main, slotNames: plugins.slotNames<Subsection.Slots>()() };
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
