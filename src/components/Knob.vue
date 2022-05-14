<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Knob] */

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
import type { Knob } from "./Knob.extras";

export default defineComponent({
  name: "m-knob",
  props: {
    ...parentProps<Knob.ParentProps>(),
    disable: prop.boolean(),
    inline: prop.boolean(),
    modelValue: prop.required<Knob.Props["modelValue"]>()
  },
  emits: { "update:modelValue": (value: number) => skipCheck(value) },
  setup: (props, { emit }) => {
    validateEmit<Knob.OwnProps>(emit);
    validateProps<Knob.OwnProps>(props);

    return {
      globalDisable: injections.globalDisable.inject(),
      slotNames: plugins.useSlotNames<Knob.Slots>()()
    };
  }
});
</script>

<template>
  <q-knob
    class="m-knob"
    :class="{ 'm-knob__inline': inline }"
    color="primary"
    :disable="disable || globalDisable"
    :model-value="modelValue"
    show-value
    size="55px"
    :thickness="0.18"
    track-color="grey-3"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-knob>
</template>
