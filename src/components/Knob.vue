<script lang="ts">
import type { QKnobProps } from "quasar";
import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import { injectDisable } from "./Switchable.extras";

export default defineComponent({
  name: "x-knob",
  props: {
    ...({} as PropsToPropOptions<QKnobProps>),
    disable: propOptions.boolean(),
    modelValue: propOptions.required(is.number)
  },
  emits: {
    "update:model-value": (value: number) => is.number(value)
  },
  setup() {
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
