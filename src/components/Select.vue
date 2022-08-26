<script lang="ts">
/* eslint-disable @skylib/quasar-extension/vue/template/no-q-select -- Ok */

import { a, as, is, o } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import {
  directives,
  injections,
  parentProps,
  plugins,
  propFactory,
  skipCheck,
  validateEmit,
  validateProps
} from "./api";
import type { Exposed } from "./api";
import type { QSelect } from "quasar";
import { Select } from "./Select.extras";
import type { Writable } from "@skylib/functions";

const prop = propFactory<Select.OwnProps>();

interface TranslatedOption extends Omit<Select.Option, "label"> {
  readonly disable?: boolean;
  readonly label: string;
  readonly value: unknown;
}

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
    const { lang } = Select;

    const lk = lang.keys;

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
      computed(
        (): plugins.validation.Options =>
          o.removeUndefinedKeys({
            format,
            label: props.validationLabel,
            required: props.required,
            requiredErrorMessage: lk.SelectField
          })
      )
    );

    const exposed: Exposed<Select.Global> = { main };

    validateEmit<Select.OwnProps>(emit);
    validateProps<Select.OwnProps>(props);
    expose(exposed);

    return {
      blur: (): void => {
        validation.validate(
          selectedOption.value,
          plugins.validation.Context.change
        );
      },
      displayValue: computed(() =>
        selectedOption.value
          ? lang.get(selectedOption.value.label)
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
        props.options.map(
          (option): TranslatedOption => ({
            ...option,
            label: lang.get(option.label)
          })
        )
      ),
      rules: computed(
        (): Writable<plugins.validation.ValidationRules> =>
          a.clone(validation.rules.value)
      ),
      selectedOption,
      slotNames: plugins.slotNames<Select.Slots>()("label", "selected"),
      update: (value: unknown): void => {
        emit("update:modelValue", format(value));
        validation.validate(value, plugins.validation.Context.input);
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
