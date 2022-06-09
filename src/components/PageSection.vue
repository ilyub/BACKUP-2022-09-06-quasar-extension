<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent, ref } from "vue";
import type { PageSection } from "./PageSection.extras";
import type { Switchable } from "./Switchable.extras";

export default defineComponent({
  name: "m-page-section",
  props: parentProps<PageSection.ParentProps>(),
  setup: () => {
    return {
      main: ref<Switchable.Global>(),
      slotNames: plugins.slotNames<PageSection.Slots>()()
    };
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
