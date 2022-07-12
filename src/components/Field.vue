<script lang="ts">
/* eslint-disable @skylib/custom/quasar/vue-prefer-m-field -- Ok */

import { as, cast, fn, o } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import {
  injections,
  parentProps,
  plugins,
  propFactory,
  skipCheck,
  validateEmit,
  validateProps
} from "./api";
import type { Field } from "./Field.extras";
import type { QField } from "quasar";
import type { SetupExposed } from "./api";

const prop = propFactory<Field.OwnProps>();

export default defineComponent({
  name: "m-field",
  props: {
    ...parentProps<Field.ParentProps>(),
    ...plugins.langProps.props("label", "placeholder"),
    ...plugins.validation.props,
    disable: prop.boolean("disable"),
    focusableElement: prop("focusableElement"),
    format: prop.default("format", fn.identity),
    modelValue: prop.required("modelValue"),
    required: prop.boolean("required"),
    validationOptions: prop("validationOptions")
  },
  emits: { "update:modelValue": (value: unknown) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const { label, labelKey, placeholder } = plugins.langProps(
      props,
      "label",
      "placeholder"
    );

    const main = ref<QField>();

    const validation = plugins.validation(
      props,
      computed(() => as.not.empty(main.value)),
      computed(() =>
        o.removeUndefinedKeys({
          format: props.format,
          label: labelKey.value,
          required: props.required,
          ...props.validationOptions
        })
      )
    );

    const exposed: SetupExposed<Field.Global> = { main };

    validateEmit<Field.OwnProps>(emit);
    validateProps<Field.OwnProps>(props);
    expose(exposed);

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
      update: (value: unknown): void => {
        value = props.format(value);
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
