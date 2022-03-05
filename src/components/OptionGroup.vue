<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[OptionGroup] */

import { computed, defineComponent } from "vue";

import * as a from "@skylib/functions/es/array";
import * as is from "@skylib/functions/es/guards";
import type { Writable } from "@skylib/functions/es/types/core";

import {
  propOptions,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  OptionGroupOptions,
  OptionGroupOwnProps,
  OptionGroupParentProps,
  OptionGroupSlots
} from "./OptionGroup.extras";
import { isOptionGroupOptions } from "./OptionGroup.extras";

export default defineComponent({
  name: "m-option-group",
  props: {
    ...propsToPropDefinitions<OptionGroupParentProps>(),
    inline: propOptions.boolean(),
    modelValue: propOptions.required(is.unknown),
    options: propOptions.required(isOptionGroupOptions)
  },
  emits: {
    "update:modelValue": (value: unknown) => is.unknown(value)
  },
  setup(props, { emit }) {
    validateEmit<OptionGroupOwnProps>(emit);
    validateProps<OptionGroupOwnProps>(props);

    return {
      optionGroupOptions: computed<Writable<OptionGroupOptions>>(() =>
        a.clone(props.options)
      ),
      slotNames: useSlotsNames<OptionGroupSlots>()()
    };
  }
});
</script>

<template>
  <q-option-group
    :class="{
      'inline-block': inline
    }"
    :inline="inline"
    :model-value="modelValue"
    :options="optionGroupOptions"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </q-option-group>
</template>
