<script lang="ts">
import { computed, defineComponent } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import type { Writable } from "@skylib/functions/es/types/core";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type {
  SelectOption,
  SelectOptions,
  SelectPropOptions
} from "./Select.extras";
import { isSelectOption, isSelectOptions } from "./Select.extras";

export default defineComponent({
  name: "x-select",
  props: {
    ...({} as SelectPropOptions),
    modelValue: propOptions.required(is.unknown),
    options: propOptions.required(isSelectOptions)
  },
  emits: {
    "update:model-value": (value: unknown) => is.unknown(value)
  },
  // eslint-disable-next-line @skylib/no-mutable-signature, @skylib/prefer-readonly
  setup(props: SetupProps<SelectPropOptions>, { emit }) {
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
      selectUpdateModelValue(value: unknown): void {
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
    :model-value="selectModelValue"
    :options="selectOptions"
    @update:model-value="selectUpdateModelValue"
  />
</template>
