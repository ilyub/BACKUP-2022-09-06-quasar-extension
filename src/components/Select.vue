<script lang="ts">
import { computed, defineComponent } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import type { Writable } from "@skylib/functions/es/types/core";

import { propOptions } from "./api";
import type { SelectOption, SelectOptions } from "./Select.extras";
import { isSelectOption, isSelectOptions } from "./Select.extras";

export default defineComponent({
  name: "s-select",
  props: {
    modelValue: propOptions(is.numStrU),
    options: propOptions.required(isSelectOptions)
  },
  emits: {
    "update:model-value"(value: unknown) {
      return is.numStrU(value);
    }
  },
  setup(props, { emit }) {
    return {
      activeOption: computed<SelectOption>(() => {
        const result = props.options.find(
          option => option.value === props.modelValue
        );

        assert.not.empty(result, "invalid value");

        return result;
      }),
      selectOptions: computed<Writable<SelectOptions>>(() =>
        a.clone(props.options)
      ),
      updateModelValue(value: unknown): void {
        assert.byGuard(value, isSelectOption);
        emit("update:model-value", value.value);
      }
    };
  }
});
</script>

<template>
  <q-select
    dense
    :model-value="activeOption"
    :options="selectOptions"
    @update:model-value="updateModelValue"
  />
</template>
