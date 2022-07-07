<script lang="ts">
import { parentProps, plugins, validateExpose } from "./api";
import { defineComponent, ref } from "vue";
import type { FormSection } from "./FormSection.extras";
import type { Switchable } from "./Switchable.extras";

export default defineComponent({
  name: "m-form-section",
  props: parentProps<FormSection.ParentProps>(),
  setup: (_props, { expose }) => {
    const main = ref<Switchable.Global>();

    const exposed = { main } as const;

    validateExpose<FormSection.Global>(expose, exposed);

    return { main, slotNames: plugins.slotNames<FormSection.Slots>()() };
  }
});
</script>

<template>
  <m-switchable ref="main" class="m-form-section">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
