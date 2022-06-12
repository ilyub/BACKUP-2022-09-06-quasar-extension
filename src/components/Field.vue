<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Field] */

import {
  injections,
  parentProps,
  plugins,
  propFactory,
  skipCheck,
  validateEmit,
  validateExpose,
  validateProps
} from "./api";
import { as, cast, fn, o } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { Field } from "./Field.extras";
import type { NumStrE } from "@skylib/functions";
import type { QField } from "quasar";

const prop = propFactory<Field.OwnProps>();

export default defineComponent({
  name: "m-field",
  props: {
    ...parentProps<Field.ParentProps>(),
    ...plugins.langProps.props("label", "placeholder"),
    ...plugins.validation.props,
    disable: prop.boolean<"disable">(),
    focusableElement: prop<"focusableElement">(),
    modelValue: prop.required<"modelValue">(),
    required: prop.boolean<"required">(),
    validationOptions: prop<"validationOptions">()
  },
  emits: { "update:modelValue": (value: unknown) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const { label, labelKey, placeholder } = plugins.langProps(
      props,
      "label",
      "placeholder"
    );

    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<QField>();

    const validation = plugins.validation(
      props,
      computed(() => as.not.empty(main.value)),
      computed(() =>
        o.removeUndefinedKeys({
          format: fn.identity,
          label: labelKey.value,
          required: props.required,
          ...props.validationOptions
        })
      )
    );

    validateEmit<Field.OwnProps>(emit);
    validateExpose<Field.Global>(expose, exposed);
    validateProps<Field.OwnProps>(props);

    return {
      blur: (): void => {
        validation.validate(props.modelValue, "change");
      },
      focus: (): void => {
        props.focusableElement?.focus();
      },
      globalDisable: injections.disable.inject(),
      label,
      main,
      placeholder,
      rules: validation.rules,
      slotNames: plugins.slotNames<Field.Slots>()("control", "label"),
      update: (value: NumStrE): void => {
        emit("update:modelValue", value);
        validation.validate(value, "input");
      },
      value: computed(() => cast.string(props.modelValue))
    };
  }
});
</script>

<template>
  <q-field
    ref="main"
    class="m-field"
    :clearable="!required"
    dense
    :disable="disable || globalDisable"
    hide-bottom-space
    :label="label"
    lazy-rules="ondemand"
    :model-value="value"
    :placeholder="placeholder"
    :rules="rules"
    @blur="blur"
    @focus="focus"
    @update:model-value="update"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #control="data">
      <slot
        :name="slotNames.control"
        :placeholder="placeholder"
        v-bind="data ?? {}"
      >
      </slot>
    </template>
    <template #label="data">
      <slot :name="slotNames.label" v-bind="data ?? {}">
        {{ label }}
        <span v-if="required" class="m-field__required">*</span>
      </slot>
    </template>
  </q-field>
</template>
