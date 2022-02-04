<script lang="ts">
import type { QSelectProps } from "quasar";
import { computed, defineComponent } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import type { NumStrU, Writable } from "@skylib/functions/es/types/core";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import type { SelectOption, SelectOptions } from "./Select.extras";
import { isSelectOption, isSelectOptions } from "./Select.extras";

export default defineComponent({
  name: "x-select",
  props: {
    ...({} as PropsToPropOptions<QSelectProps>),
    modelValue: propOptions(is.numStrU),
    options: propOptions.required(isSelectOptions)
  },
  emits: {
    "update:model-value": (value: NumStrU) => is.numStrU(value)
  },
  // eslint-disable-next-line @skylib/prefer-readonly
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
