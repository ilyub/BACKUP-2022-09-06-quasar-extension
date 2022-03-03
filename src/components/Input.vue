<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[Input] */

import type { QInput } from "quasar";
import { defineComponent, ref } from "vue";

import * as is from "@skylib/functions/es/guards";
import type { NumStrE, stringU } from "@skylib/functions/es/types/core";

import {
  propOptions,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { ButtonSlots } from "./Button.extras";
import type { InputOwnProps, InputParentProps } from "./Input.extras";
import { injectDisable } from "./Switchable.extras";

export default defineComponent({
  name: "m-input",
  props: {
    ...propsToPropDefinitions<InputParentProps>(),
    disable: propOptions.boolean(),
    modelValue: propOptions.required(is.stringU)
  },
  emits: {
    "update:modelValue": (value: stringU) => is.stringU(value)
  },
  setup(props, { emit }) {
    validateEmit<InputOwnProps>(emit);
    validateProps<InputOwnProps>(props);

    const input = ref<QInput | undefined>(undefined);

    return {
      globalDisable: injectDisable(),
      input,
      slotNames: useSlotsNames<ButtonSlots>()(),
      updateModel(value: NumStrE): void {
        emit(
          "update:modelValue",
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
    :disable="disable || globalDisable"
    :model-value="modelValue"
    @update:model-value="updateModel($event)"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]>
      <slot :name="slotName"></slot>
    </template>
  </q-input>
</template>
