<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent } from "vue";
import type { FormActions } from "./FormActions.extras";

export default defineComponent({
  name: "m-form-actions",
  props: parentProps<FormActions.ParentProps>(),
  setup: () => {
    return { slotNames: plugins.useSlotNames<FormActions.Slots>()() };
  }
});
</script>

<template>
  <m-switchable class="m-form-actions">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
