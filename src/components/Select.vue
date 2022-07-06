<script lang="ts">
/* eslint-disable @skylib/custom/quasar/vue-prefer-m-select -- Ok */

import { Select } from "./Select.extras";
import {
  directives,
  injections,
  parentProps,
  plugins,
  propFactory,
  skipCheck,
  validateEmit,
  validateExpose,
  validateProps
} from "./api";
import { as, is, o } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { QSelect } from "quasar";

const prop = propFactory<Select.OwnProps>();

export default defineComponent({
  name: "m-select",
  directives: { debugId: directives.debugId("select") },
  props: {
    ...parentProps<Select.ParentProps>(),
    ...plugins.langProps.props("initialLabel", "label"),
    ...plugins.validation.props,
    disable: prop.boolean("disable"),
    modelValue: prop("modelValue"),
    options: prop.required("options"),
    required: prop.boolean("required"),
    validationLabel: prop("validationLabel")
  },
  emits: { "update:modelValue": (value: unknown) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const { initialLabel, label } = plugins.langProps(
      props,
      "initialLabel",
      "label"
    );

    const main = ref<QSelect>();

    const selectedOption = computed(() =>
      props.options.find(option => option.value === props.modelValue)
    );

    const validation = plugins.validation(
      props,
      computed(() => as.not.empty(main.value)),
      computed(() =>
        o.removeUndefinedKeys({
          format,
          label: props.validationLabel,
          required: props.required,
          requiredErrorMessage: Select.lang.keys.SelectField
        })
      )
    );

    const exposed = { main };

    validateEmit<Select.OwnProps>(emit);
    validateExpose<Select.Global>(expose, exposed);
    validateProps<Select.OwnProps>(props);

    return {
      blur: (): void => {
        validation.validate(selectedOption.value, "change");
      },
      displayValue: computed(() =>
        selectedOption.value
          ? Select.lang.get(selectedOption.value.label)
          : initialLabel.value
      ),
      displayValueInitial: computed(() => is.empty(selectedOption.value)),
      displayValueRequired: computed(
        () =>
          props.required &&
          is.empty(label.value) &&
          is.empty(selectedOption.value)
      ),
      globalDisable: injections.disable.inject(),
      label,
      main,
      mainOptions: computed(() =>
        props.options.map(option => {
          return { ...option, label: Select.lang.get(option.label) };
        })
      ),
      rules: validation.rules,
      selectedOption,
      slotNames: plugins.slotNames<Select.Slots>()("label", "selected"),
      update: (value: unknown): void => {
        emit("update:modelValue", format(value));
        validation.validate(value, "input");
      }
    };

    function format(value: unknown): unknown {
      return is.not.empty(value) ? as.indexedObject(value)["value"] : undefined;
    }
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
    :label="label"
    lazy-rules="ondemand"
    :model-value="selectedOption"
    :options="mainOptions"
    :rules="rules"
    @blur="blur"
    @update:model-value="update"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #label="data">
      <slot :name="slotNames.label" v-bind="data ?? {}">
        {{ label }}
        <span v-if="required" class="m-select__label__required">*</span>
      </slot>
    </template>
    <template #selected="data">
      <slot :name="slotNames.selected" v-bind="data ?? {}">
        <span
          :class="{ 'm-select__display-value__initial': displayValueInitial }"
        >
          {{ displayValue }}
        </span>
        <span
          v-if="displayValueRequired"
          v-debug-id="'display-value-required'"
          class="m-select__display-value__required"
        >
          *
        </span>
      </slot>
    </template>
  </q-select>
</template>
