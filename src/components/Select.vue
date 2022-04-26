<script lang="ts">
import { isSelectOption, lang } from "./Select.extras";
import {
  prop,
  propsToPropDefinitions,
  validateEmit,
  validateProps,
  useSlotsNames
} from "./api";
import { assert, is, o } from "@skylib/functions";
import { computed, defineComponent } from "vue";
import type { ButtonSlots } from "./Button.extras";
import type {
  SelectOption,
  SelectOptions,
  SelectOwnProps,
  SelectParentProps
} from "./Select.extras";
import type { stringU, Writable } from "@skylib/functions";

export default defineComponent({
  name: "m-select",
  props: {
    ...propsToPropDefinitions<SelectParentProps>(),
    initialLabel: prop<stringU>(),
    modelValue: prop(),
    options: prop.required<SelectOptions>()
  },
  emits: { "update:modelValue": (value: unknown) => is.unknown(value) },
  setup(props, { emit }) {
    validateEmit<SelectOwnProps>(emit);
    validateProps<SelectOwnProps>(props);

    const selectedOption = computed<SelectOption | undefined>(() =>
      props.options.find(option => option.value === props.modelValue)
    );

    return {
      displayValue: computed<stringU>(() =>
        selectedOption.value ? undefined : props.initialLabel ?? lang.Select
      ),
      selectModelValue: computed<SelectOption | undefined>(
        () => selectedOption.value
      ),
      selectOptions: computed<Writable<SelectOptions>>(() =>
        o.unfreeze(props.options)
      ),
      slotNames: useSlotsNames<ButtonSlots>()(),
      updateModelValue(value: unknown): void {
        assert.byGuard(value, isSelectOption);
        emit("update:modelValue", value.value);
      }
    };
  }
});
</script>

<template>
  <q-select
    class="m-select"
    dense
    :display-value="displayValue"
    :model-value="selectModelValue"
    :options="selectOptions"
    @update:model-value="updateModelValue"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </q-select>
</template>
