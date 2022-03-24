<script lang="ts">
import { computed, defineComponent } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import type { Writable } from "@skylib/functions/es/types/core";

import {
  prop,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { ButtonSlots } from "./Button.extras";
import type {
  SelectOption,
  SelectOptions,
  SelectOwnProps,
  SelectParentProps
} from "./Select.extras";
import { isSelectOption } from "./Select.extras";

export default defineComponent({
  name: "m-select",
  props: {
    ...propsToPropDefinitions<SelectParentProps>(),
    modelValue: prop(),
    options: prop.required<SelectOptions>()
  },
  emits: {
    "update:modelValue": (value: unknown) => is.unknown(value)
  },
  setup(props, { emit }) {
    validateEmit<SelectOwnProps>(emit);
    validateProps<SelectOwnProps>(props);

    return {
      selectModelValue: computed<SelectOption>(() => {
        const result = props.options.find(
          option => option.value === props.modelValue
        );

        assert.not.empty(result, "Invalid value");

        return result;
      }),
      selectOptions: computed<Writable<SelectOptions>>(() =>
        a.clone(props.options)
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
    :model-value="selectModelValue"
    :options="selectOptions"
    @update:model-value="updateModelValue"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </q-select>
</template>
