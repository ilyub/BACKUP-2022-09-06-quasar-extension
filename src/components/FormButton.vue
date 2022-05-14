<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent } from "vue";
import type { FormButton } from "./FormButton.extras";

export default defineComponent({
  name: "m-form-button",
  props: parentProps<FormButton.ParentProps>(),
  setup: () => {
    return { slotNames: plugins.useSlotNames<FormButton.Slots>()() };
  }
});
</script>

<template>
  <m-base-button class="m-form-button" flat>
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-base-button>
</template>
