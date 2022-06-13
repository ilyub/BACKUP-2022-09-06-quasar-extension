<script lang="ts">
import { parentProps, plugins, validateExpose } from "./api";
import { defineComponent, ref } from "vue";
import type { FormActions } from "./FormActions.extras";
import type { Switchable } from "./Switchable.extras";

export default defineComponent({
  name: "m-form-actions",
  props: parentProps<FormActions.ParentProps>(),
  setup: (_props, { expose }) => {
    const main = ref<Switchable.Global>();

    const exposed = { main };

    validateExpose<FormActions.Global>(expose, exposed);

    return { main, slotNames: plugins.slotNames<FormActions.Slots>()() };
  }
});
</script>

<template>
  <m-switchable ref="main" class="m-form-actions">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
