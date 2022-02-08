<script lang="ts">
import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import { injectDisable } from "./Switchable.extras";
import type { TogglePropOptions } from "./Toggle.extras";

export default defineComponent({
  name: "x-toggle",
  props: {
    ...({} as TogglePropOptions),
    disable: propOptions.boolean(),
    modelValue: propOptions.required(is.boolean)
  },
  emits: {
    "update:model-value": (value: boolean) => is.boolean(value)
  },
  setup(_props: SetupProps<TogglePropOptions>) {
    return {
      globalDisable: injectDisable()
    };
  }
});
</script>

<template>
  <q-toggle
    :disable="disable || globalDisable"
    :model-value="modelValue"
    @update:model-value="$emit('update:model-value', $event)"
  />
</template>
