<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[Knob] */

import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import {
  propOptions,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { KnobOwnProps, KnobParentProps, KnobSlots } from "./Knob.extras";
import { injectDisable } from "./Switchable.extras";

export default defineComponent({
  name: "m-knob",
  props: {
    ...propsToPropDefinitions<KnobParentProps>(),
    disable: propOptions.boolean(),
    inline: propOptions.boolean(),
    modelValue: propOptions.required(is.number)
  },
  emits: {
    "update:modelValue": (value: number) => is.number(value)
  },
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
    :class="{
      [$style.inline]: inline
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

<style lang="scss" module>
@use "sass:map";

@import "~quasar/src/css/variables.sass";

.inline {
  margin-right: map.get($space-sm, "x");
  margin-left: map.get($space-sm, "x");
}
</style>
