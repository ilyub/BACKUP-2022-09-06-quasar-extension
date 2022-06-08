<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Select] */

import { Select } from "./Select.extras";
import {
  injections,
  parentProps,
  plugins,
  prop,
  skipCheck,
  validateEmit,
  validateProps
} from "./api";
import { lang } from "@skylib/facades";
import { as, fn, is, o } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { QSelect } from "quasar";

export default defineComponent({
  name: "m-select",
  props: {
    ...parentProps<Select.ParentProps>(),
    disable: prop.boolean(),
    initialLabel: prop<Select.Props["initialLabel"]>(),
    label: prop<Select.Props["label"]>(),
    modelValue: prop<Select.Props["modelValue"]>(),
    options: prop.required<Select.Props["options"]>(),
    required: prop.boolean(),
    validationLabel: prop<Select.Props["validationLabel"]>()
  },
  emits: { "update:modelValue": (value: unknown) => skipCheck(value) },
  setup: (props, { emit }) => {
    validateEmit<Select.OwnProps>(emit);
    validateProps<Select.OwnProps>(props);

    const selectedOption = computed(() =>
      props.options.find(option => option.value === props.modelValue)
    );

    const main = ref<QSelect>();

    const validation = plugins.useValidation(
      props,
      computed(() => as.not.empty(main.value)),
      computed(() =>
        o.removeUndefinedKeys({
          format: fn.identity,
          label: props.validationLabel,
          required: props.required,
          // eslint-disable-next-line no-warning-comments -- Wait for @skylib/framework update
          // fixme - Use lang.keys.SelectField instead of "SelectField"
          requiredErrorMessage: Select.lang.keys.SelectField
        })
      )
    );

    return {
      blur: (): void => {
        validation.validate(props.modelValue, "change");
      },
      displayValue: computed(() => {
        if (selectedOption.value) return selectedOption.value.label;

        // eslint-disable-next-line no-warning-comments -- Wait for @skylib/framework update
        // fixme - Use "getIfExists"
        if (is.not.empty(props.initialLabel))
          return lang.get(props.initialLabel);

        return undefined;
      }),
      displayValueInitial: computed(() => is.empty(selectedOption.value)),
      displayValueShowRequired: computed(
        () => is.empty(props.label) && is.empty(selectedOption.value)
      ),
      globalDisable: injections.disable.inject(),
      main,
      mainLabel: computed(() =>
        // eslint-disable-next-line no-warning-comments -- Wait for @skylib/framework update
        // fixme - Use "getIfExists"
        is.not.empty(props.label) ? lang.get(props.label) : undefined
      ),
      rules: validation.rules,
      slotNames: plugins.useSlotNames<Select.Slots>()("label", "selected"),
      update: (value: unknown): void => {
        emit(
          "update:modelValue",
          is.indexedObject(value) ? value["value"] : undefined
        );
        validation.validate(value, "input");
      },
      value: computed(() => selectedOption.value)
    };
  }
});
</script>

<template>
  <q-select
    ref="main"
    class="m-select"
    :clearable="!required"
    dense
    :disable="disable || globalDisable"
    :display-value="displayValue"
    hide-bottom-space
    :label="mainLabel"
    lazy-rules="ondemand"
    :model-value="value"
    :options="options"
    :rules="rules"
    @blur="blur"
    @update:model-value="update"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #label="data">
      <slot :name="slotNames.label" v-bind="data ?? {}">
        {{ mainLabel }}
        <span v-if="required" class="m-select__label__required">*</span>
      </slot>
    </template>
    <template #selected="data">
      <slot :name="slotNames.selected" v-bind="data ?? {}">
        <span
          :class="{
            'm-select__display-value__initial': displayValueInitial
          }"
        >
          {{ displayValue }}
        </span>
        <span
          v-if="required && displayValueShowRequired"
          class="m-select__display-value__required"
        >
          *
        </span>
      </slot>
    </template>
  </q-select>
</template>
