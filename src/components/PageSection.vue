<script lang="ts">
import { defineComponent, ref } from "vue";
import { parentProps, plugins, validateExpose } from "./api";
import type { PageSection } from "./PageSection.extras";
import type { Switchable } from "./Switchable.extras";

export default defineComponent({
  name: "m-page-section",
  props: parentProps<PageSection.ParentProps>(),
  setup: (_props, { expose }) => {
    const main = ref<Switchable.Global>();

    const exposed = { main } as const;

    validateExpose<PageSection.Global>(expose, exposed);

    return { main, slotNames: plugins.slotNames<PageSection.Slots>()() };
  }
});
</script>

<template>
  <m-switchable ref="main" class="m-page-section">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
