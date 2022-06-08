<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Knob] */

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
import type { Knob } from "./Knob.extras";
import type { QKnob } from "quasar";

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
      globalDisable: injections.disable.inject(),
      main: ref<QKnob>(),
      slotNames: plugins.useSlotNames<Knob.Slots>()()
    };
  }
});
</script>

<template>
  <q-knob
    ref="main"
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
