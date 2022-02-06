<script lang="ts">
import type { QOptionGroupProps } from "quasar";
import { computed, defineComponent } from "vue";

import * as a from "@skylib/functions/es/array";
import * as is from "@skylib/functions/es/guards";
import type { Writable } from "@skylib/functions/es/types/core";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import type { OptionGroupOptions } from "./OptionGroup.extras";
import { isOptionGroupOptions } from "./OptionGroup.extras";

export default defineComponent({
  name: "x-option-group",
  props: {
    ...({} as PropsToPropOptions<QOptionGroupProps>),
    modelValue: propOptions.required(is.unknown),
    options: propOptions.required(isOptionGroupOptions)
  },
  emits: {
    "update:model-value": (value: unknown) => is.unknown(value)
  },
  // eslint-disable-next-line @skylib/prefer-readonly
  setup(props) {
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
