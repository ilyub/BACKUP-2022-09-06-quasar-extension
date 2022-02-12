<script lang="ts">
import type { QInput, QInputSlots } from "quasar";
import { computed, defineComponent, ref } from "vue";

import * as is from "@skylib/functions/es/guards";
import type { NumStrE, stringU } from "@skylib/functions/es/types/core";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { InputPropOptions } from "./Input.extras";

type SlotKeys = ReadonlyArray<keyof QInputSlots>;

export default defineComponent({
  name: "x-input",
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as InputPropOptions),
    modelValue: propOptions.required(is.stringU)
  },
  emits: {
    "update:model-value": (value: stringU) => is.stringU(value)
  },
  // eslint-disable-next-line @skylib/no-mutable-signature, @skylib/prefer-readonly
  setup(_props: SetupProps<InputPropOptions>, { emit, slots }) {
    const input = ref<QInput | undefined>(undefined);

    return {
      input,
      passThroughSlots: computed<SlotKeys>(
        // eslint-disable-next-line no-type-assertion/no-type-assertion
        () => Object.keys(slots) as SlotKeys
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
