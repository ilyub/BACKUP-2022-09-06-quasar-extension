<script lang="ts">
import { defineComponent, ref } from "vue";
import { parentProps, plugins } from "./api";
import type { BaseButton } from "./BaseButton.extras";
import type { FormButton } from "./FormButton.extras";
import type { SetupExposed } from "./api";

export default defineComponent({
  name: "m-form-button",
  props: parentProps<FormButton.ParentProps>(),
  setup: (_props, { expose }) => {
    const main = ref<BaseButton.Global>();

    const exposed: SetupExposed<FormButton.Global> = { main };

    expose(exposed);

    return { main, slotNames: plugins.slotNames<FormButton.Slots>()() };
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
