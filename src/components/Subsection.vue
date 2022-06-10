<script lang="ts">
import { parentProps, plugins, validateExpose } from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { Subsection } from "./Subsection.extras";

export default defineComponent({
  name: "m-subsection",
  props: parentProps<Subsection.ParentProps>(),
  setup: (_props, { expose }) => {
    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<Subsection.Global>();

    validateExpose<Subsection.Global>(expose, exposed);

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
