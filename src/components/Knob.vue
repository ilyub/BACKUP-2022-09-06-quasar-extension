<script lang="ts">
import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";

export default defineComponent({
  name: "s-knob",
  props: {
    modelValue: propOptions.required(is.number)
  },
  emits: {
    "update:model-value"(value: unknown) {
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
