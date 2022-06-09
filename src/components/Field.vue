<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Field] */

import {
  injections,
  parentProps,
  plugins,
  prop,
  skipCheck,
  validateEmit,
  validateProps
} from "./api";
import { as, cast, fn, o } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { Field } from "./Field.extras";
import type { NumStrE } from "@skylib/functions";
import type { QField } from "quasar";

export default defineComponent({
  name: "m-field",
  props: {
    ...parentProps<Field.ParentProps>(),
    ...plugins.label.props,
    ...plugins.validation.props,
    disable: prop.boolean(),
    focusableElement: prop<Field.Props["focusableElement"]>(),
    modelValue: prop<Field.Props["modelValue"]>(),
    placeholder: prop.default<Field.Props["placeholder"]>(""),
    required: prop.boolean(),
    validationOptions: prop<Field.Props["validationOptions"]>()
  },
  emits: { "update:modelValue": (value: unknown) => skipCheck(value) },
  setup: (props, { emit }) => {
    validateEmit<Field.OwnProps>(emit);
    validateProps<Field.OwnProps>(props);

    const { label, labelKey } = plugins.label(props);

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
        v-bind="data ?? {}"
        :name="slotNames.control"
        :placeholder="placeholder"
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
