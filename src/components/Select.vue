<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Select] */

import { Select } from "./Select.extras";
import {
  prop,
  parentProps,
  validateEmit,
  validateProps,
  plugins,
  skipCheck
} from "./api";
import { a } from "@skylib/functions";
import { computed, defineComponent } from "vue";
import type { Button } from "./Button.extras";

export default defineComponent({
  name: "m-select",
  props: {
    ...parentProps<Select.ParentProps>(),
    initialLabel: prop<Select.Props["initialLabel"]>(),
    modelValue: prop<Select.Props["modelValue"]>(),
    options: prop.required<Select.Props["options"]>()
  },
  emits: { "update:modelValue": (value: unknown) => skipCheck(value) },
  setup: (props, { emit }) => {
    validateEmit<Select.OwnProps>(emit);
    validateProps<Select.OwnProps>(props);

    const selectedOption = computed(() =>
      props.options.find(option => option.value === props.modelValue)
    );

    return {
      selectDisplayValue: computed(() =>
        selectedOption.value
          ? undefined
          : props.initialLabel ?? Select.lang.Select
      ),
      selectValue: computed(() => selectedOption.value),
      slotNames: plugins.useSlotNames<Button.Slots>()(),
      writableOptions: computed(() => a.clone(props.options))
    };
  }
});
</script>

<template>
  <q-select
    class="m-select"
    dense
    :display-value="selectDisplayValue"
    :model-value="selectValue"
    :options="writableOptions"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-select>
</template>
