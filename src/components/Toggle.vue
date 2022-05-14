<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Toggle] */

import {
  prop,
  parentProps,
  validateEmit,
  validateProps,
  plugins,
  skipCheck,
  injections
} from "./api";
import { defineComponent } from "vue";
import type { Toggle } from "./Toggle.extras";

export default defineComponent({
  name: "m-toggle",
  props: {
    ...parentProps<Toggle.ParentProps>(),
    disable: prop.boolean(),
    modelValue: prop.boolean()
  },
  emits: { "update:modelValue": (value: boolean) => skipCheck(value) },
  setup: (props, { emit }) => {
    validateEmit<Toggle.OwnProps>(emit);
    validateProps<Toggle.OwnProps>(props);

    return {
      globalDisable: injections.globalDisable.inject(),
      slotNames: plugins.useSlotNames<Toggle.Slots>()()
    };
  }
});
</script>

<template>
  <q-toggle
    class="m-toggle"
    :disable="disable || globalDisable"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-toggle>
</template>
