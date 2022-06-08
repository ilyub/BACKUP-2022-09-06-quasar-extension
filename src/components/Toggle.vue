<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Toggle] */

import {
  injections,
  parentProps,
  plugins,
  prop,
  skipCheck,
  validateEmit,
  validateProps
} from "./api";
import { defineComponent, ref } from "vue";
import type { Toggle } from "./Toggle.extras";
import type { QToggle } from "quasar";

export default defineComponent({
  name: "m-toggle",
  props: {
    ...parentProps<Toggle.ParentProps>(),
    ...plugins.useLabel.props,
    disable: prop.boolean(),
    modelValue: prop.boolean()
  },
  emits: { "update:modelValue": (value: boolean) => skipCheck(value) },
  setup: (props, { emit }) => {
    validateEmit<Toggle.OwnProps>(emit);
    validateProps<Toggle.OwnProps>(props);

    return {
      globalDisable: injections.disable.inject(),
      label: plugins.useLabel(props),
      main: ref<QToggle>(),
      slotNames: plugins.useSlotNames<Toggle.Slots>()()
    };
  }
});
</script>

<template>
  <q-toggle
    ref="main"
    class="m-toggle"
    :disable="disable || globalDisable"
    :label="label"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-toggle>
</template>
