<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[Toggle] */

import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import {
  propOptions,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { useSlotsNames } from "./api/slotNames";
import { injectDisable } from "./Switchable.extras";
import type {
  ToggleOwnProps,
  ToggleParentProps,
  ToggleSlots
} from "./Toggle.extras";

export default defineComponent({
  name: "m-toggle",
  props: {
    ...propsToPropDefinitions<ToggleParentProps>(),
    disable: propOptions.boolean(),
    modelValue: propOptions.required(is.boolean)
  },
  emits: {
    "update:modelValue": (value: boolean) => is.boolean(value)
  },
  setup(props, { emit }) {
    validateEmit<ToggleOwnProps>(emit);
    validateProps<ToggleOwnProps>(props);

    return {
      globalDisable: injectDisable(),
      slotNames: useSlotsNames<ToggleSlots>()()
    };
  }
});
</script>

<template>
  <q-toggle
    :disable="disable || globalDisable"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </q-toggle>
</template>
