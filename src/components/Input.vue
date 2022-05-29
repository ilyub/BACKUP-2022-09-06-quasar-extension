<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Input] */

import {
  prop,
  parentProps,
  validateEmit,
  validateProps,
  plugins,
  skipCheck,
  injections
} from "./api";
import { is } from "@skylib/functions";
import { defineComponent } from "vue";
import type { Input } from "./Input.extras";
import type { NumStrE, stringU } from "@skylib/functions";

export default defineComponent({
  name: "m-input",
  props: {
    ...parentProps<Input.ParentProps>(),
    ...plugins.useValidation.props,
    disable: prop.boolean(),
    label: prop<Input.Props["label"]>(),
    modelValue: prop<Input.Props["modelValue"]>(),
    required: prop.boolean()
  },
  emits: { "update:modelValue": (value: stringU) => skipCheck(value) },
  setup: (props, { emit }) => {
    validateEmit<Input.OwnProps>(emit);
    validateProps<Input.OwnProps>(props);

    const validation = plugins.useValidation(props, () => props.modelValue);

    return {
      change: validation.change,
      globalDisable: injections.globalDisable.inject(),
      main: validation.target,
      rules: validation.rules,
      slotNames: plugins.useSlotNames<Input.Slots>()("label"),
      update: (value: NumStrE): void => {
        emit(
          "update:modelValue",
          is.string(value) && value ? value : undefined
        );
      }
    };
  }
});
</script>

<template>
  <q-input
    ref="main"
    class="m-input"
    dense
    :disable="disable || globalDisable"
    hide-bottom-space
    :label="label"
    :model-value="modelValue"
    :rules="rules"
    @change="change"
    @update:model-value="update"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #label>
      <slot :name="slotNames.label">
        {{ label }}
        <span v-if="required" class="m-input__required">*</span>
      </slot>
    </template>
  </q-input>
</template>
