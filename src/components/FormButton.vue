<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent, ref } from "vue";
import type { BaseButton } from "./BaseButton.extras";
import type { FormButton } from "./FormButton.extras";

export default defineComponent({
  name: "m-form-button",
  props: parentProps<FormButton.ParentProps>(),
  setup: () => {
    return {
      main: ref<BaseButton.Global>(),
      slotNames: plugins.useSlotNames<FormButton.Slots>()()
    };
  }
});
</script>

<template>
  <m-base-button ref="main" class="m-form-button" flat>
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-base-button>
</template>
