<script lang="ts">
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";
import type { stringU, Writable } from "@skylib/functions/es/types/core";
import { computed, defineComponent } from "vue";
import type { ButtonSlots } from "./Button.extras";
import type {
  SelectOption,
  SelectOptions,
  SelectOwnProps,
  SelectParentProps
} from "./Select.extras";
import { isSelectOption, lang } from "./Select.extras";
import {
  prop,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { useSlotsNames } from "./api/slotNames";

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
