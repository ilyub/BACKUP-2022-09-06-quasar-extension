<script lang="ts">
import type { QInput } from "quasar";
import { computed, defineComponent, ref } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import type { NumStrE } from "@skylib/functions/es/types/core";

import { propOptions } from "./api";
import { icons } from "./Input.extras";

export default defineComponent({
  name: "s-input",
  props: {
    modelValue: propOptions(is.stringU)
  },
  emits: {
    "update:model-value"(value: unknown) {
      return is.stringU(value);
    }
  },
  setup(props, { emit, slots }) {
    const input = ref<QInput | undefined>(undefined);

    return {
      canReset: computed<boolean>(() => is.not.empty(props.modelValue)),
      icons,
      input,
      passThroughSlots: computed<never[]>(() => Object.keys(slots) as never[]),
      reset(): void {
        emit("update:model-value", undefined);
        assert.not.empty(input.value);
        input.value.focus();
      },
      updateModelValue(value: NumStrE): void {
        emit(
          "update:model-value",
          is.not.null(value) && value !== "" ? value : undefined
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
    @update:model-value="updateModelValue"
  >
    <template v-for="name in passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-input>
</template>
