<script lang="ts">
import { parentProps, plugins, validateExpose } from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { BaseButton } from "./BaseButton.extras";
import type { FormButton } from "./FormButton.extras";

export default defineComponent({
  name: "m-form-button",
  props: parentProps<FormButton.ParentProps>(),
  setup: (_props, { expose }) => {
    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<BaseButton.Global>();

    validateExpose<FormButton.Global>(expose, exposed);

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
