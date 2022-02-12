<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[OptionGroup] */

import { computed, defineComponent } from "vue";

import * as a from "@skylib/functions/es/array";
import * as is from "@skylib/functions/es/guards";
import type { Writable } from "@skylib/functions/es/types/core";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type {
  OptionGroupOptions,
  OptionGroupPropOptions
} from "./OptionGroup.extras";
import { isOptionGroupOptions } from "./OptionGroup.extras";

export default defineComponent({
  name: "x-option-group",
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as OptionGroupPropOptions),
    modelValue: propOptions.required(is.unknown),
    options: propOptions.required(isOptionGroupOptions)
  },
  emits: {
    "update:model-value": (value: unknown) => is.unknown(value)
  },
  setup(props: SetupProps<OptionGroupPropOptions>) {
    return {
      optionGroupOptions: computed<Writable<OptionGroupOptions>>(() =>
        a.clone(props.options)
      )
    };
  }
});
</script>

<template>
  <q-option-group
    :model-value="modelValue"
    :options="optionGroupOptions"
    @update:model-value="$emit('update:model-value', $event)"
  />
</template>
