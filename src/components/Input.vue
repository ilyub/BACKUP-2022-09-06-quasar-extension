<script lang="ts">
import type { QInput } from "quasar";
import { defineComponent, ref } from "vue";

import * as is from "@skylib/functions/es/guards";
import type { NumStrE, stringU } from "@skylib/functions/es/types/core";

import { propOptions, propsToPropDefinitions } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { ButtonSlots } from "./Button.extras";
import type { InputProps } from "./Input.extras";

export default defineComponent({
  name: "m-input",
  props: {
    ...propsToPropDefinitions<InputProps>(),
    modelValue: propOptions.required(is.stringU)
  },
  emits: {
    "update:model-value": (value: stringU) => is.stringU(value)
  },
  setup(_props, { emit }) {
    const input = ref<QInput | undefined>(undefined);

    return {
      input,
      slotNames: useSlotsNames<ButtonSlots>()(),
      updateModel(value: NumStrE): void {
        emit(
          "update:model-value",
          is.string(value) && value !== "" ? value : undefined
        );
      }
    };
  }
});
</script>

<template>
  <q-input
    ref="input"
    dense
    :model-value="modelValue"
    @update:model-value="updateModel"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]>
      <slot :name="slotName"></slot>
    </template>
  </q-input>
</template>
