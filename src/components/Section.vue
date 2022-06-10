<script lang="ts">
import { parentProps, plugins, validateExpose } from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { Section } from "./Section.extras";
import type { Switchable } from "./Switchable.extras";

export default defineComponent({
  name: "m-section",
  props: parentProps<Section.ParentProps>(),
  setup: (_props, { expose }) => {
    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<Switchable.Global>();

    validateExpose<Section.Global>(expose, exposed);

    return { main, slotNames: plugins.slotNames<Section.Slots>()() };
  }
});
</script>

<template>
  <m-switchable ref="main" class="m-section">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
