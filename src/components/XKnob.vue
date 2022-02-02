<script lang="ts">
import type { QKnobProps } from "quasar";
import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";

export default defineComponent({
  name: "x-knob",
  props: {
    ...({} as PropsToPropOptions<QKnobProps>),
    modelValue: propOptions.required(is.number)
  },
  emits: {
    "update:model-value"(this: undefined, value: number) {
      return is.number(value);
    }
  }
});
</script>

<template>
  <q-knob
    color="primary"
    :model-value="modelValue"
    show-value
    size="55px"
    :thickness="0.18"
    track-color="grey-3"
    @update:model-value="$emit('update:model-value', $event)"
  />
</template>
