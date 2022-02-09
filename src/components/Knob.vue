<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[Knob] */

import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { KnobPropOptions } from "./Knob.extras";
import { injectDisable } from "./Switchable.extras";

export default defineComponent({
  name: "x-knob",
  props: {
    ...({} as KnobPropOptions),
    disable: propOptions.boolean(),
    modelValue: propOptions.required(is.number)
  },
  emits: {
    "update:model-value": (value: number) => is.number(value)
  },
  setup(_props: SetupProps<KnobPropOptions>) {
    return {
      globalDisable: injectDisable()
    };
  }
});
</script>

<template>
  <q-knob
    color="primary"
    :disable="disable || globalDisable"
    :model-value="modelValue"
    show-value
    size="55px"
    :thickness="0.18"
    track-color="grey-3"
    @update:model-value="$emit('update:model-value', $event)"
  />
</template>
