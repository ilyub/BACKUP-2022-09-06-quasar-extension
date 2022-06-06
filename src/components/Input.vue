<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Input] */

import { Input } from "./Input.extras";
import {
  prop,
  parentProps,
  validateEmit,
  validateProps,
  plugins,
  skipCheck,
  injections
} from "./api";
import { is, o } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { NumStrE, stringU } from "@skylib/functions";
import type { QInput } from "quasar";

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

    const main = ref<QInput>();

    const validation = plugins.useValidation(
      props,
      main,
      () => props.modelValue,
      () =>
        o.removeUndefinedKeys({ label: props.label, required: props.required })
    );

    return {
      change: validation.change,
      globalDisable: injections.globalDisable.inject(),
      inputLabel: computed(() =>
        is.not.empty(props.label) && Input.lang.has(props.label)
          ? Input.lang.get(props.label)
          : props.label
      ),
      main,
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
    :clearable="!required"
    dense
    :disable="disable || globalDisable"
    hide-bottom-space
    :label="inputLabel"
    :model-value="modelValue"
    :rules="rules"
    @change="change"
    @update:model-value="update"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #label="data">
      <slot :name="slotNames.label" v-bind="data ?? {}">
        {{ inputLabel }}
        <span v-if="required" class="m-input__required">*</span>
      </slot>
    </template>
  </q-input>
</template>
