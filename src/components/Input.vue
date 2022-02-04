<script lang="ts">
import type { QInput, QInputProps, QInputSlots } from "quasar";
import { computed, defineComponent, ref } from "vue";

import * as is from "@skylib/functions/es/guards";
import type { NumStrE, stringU } from "@skylib/functions/es/types/core";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";

export default defineComponent({
  name: "x-input",
  props: {
    ...({} as PropsToPropOptions<QInputProps>),
    modelValue: propOptions.required(is.stringU)
  },
  emits: {
    "update:model-value": (value: stringU) => is.stringU(value)
  },
  // eslint-disable-next-line @skylib/prefer-readonly
  setup(_props, { emit, slots }) {
    const input = ref<QInput | undefined>(undefined);

    return {
      input,
      passThroughSlots: computed<Array<keyof QInputSlots>>(
        () => Object.keys(slots) as Array<keyof QInputSlots>
      ),
      updateModel(value: NumStrE): void {
        emit(
          "update:model-value",
          is.string(value) && value !== "" ? value : undefined
        );
      }
    };
  }
});
</script>

<template>
  <q-input
    ref="input"
    dense
    :model-value="modelValue"
    @update:model-value="updateModel"
  >
    <template v-for="name in passThroughSlots" #[name]>
      <slot :name="name"></slot>
    </template>
  </q-input>
</template>
