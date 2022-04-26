<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[Knob] */

import { injectDisable } from "./Switchable.extras";
import {
  prop,
  propsToPropDefinitions,
  validateEmit,
  validateProps,
  useSlotsNames
} from "./api";
import { is } from "@skylib/functions";
import { defineComponent } from "vue";
import type { KnobOwnProps, KnobParentProps, KnobSlots } from "./Knob.extras";

export default defineComponent({
  name: "m-knob",
  props: {
    ...propsToPropDefinitions<KnobParentProps>(),
    disable: prop.boolean(),
    inline: prop.boolean(),
    modelValue: prop.required<number>()
  },
  emits: { "update:modelValue": (value: number) => is.number(value) },
  setup(props, { emit }) {
    validateEmit<KnobOwnProps>(emit);
    validateProps<KnobOwnProps>(props);

    return {
      globalDisable: injectDisable(),
      slotNames: useSlotsNames<KnobSlots>()()
    };
  }
});
</script>

<template>
  <q-knob
    class="m-knob"
    :class="{
      'm-knob__inline': inline
    }"
    color="primary"
    :disable="disable || globalDisable"
    :model-value="modelValue"
    show-value
    size="55px"
    :thickness="0.18"
    track-color="grey-3"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </q-knob>
</template>
