<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent } from "vue";
import type { FormSection } from "./FormSection.extras";

export default defineComponent({
  name: "m-form-section",
  props: parentProps<FormSection.ParentProps>(),
  setup: () => {
    return { slotNames: plugins.useSlotNames<FormSection.Slots>()() };
  }
});
</script>

<template>
  <m-switchable class="m-form-section">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
