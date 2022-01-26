<script lang="ts">
import type { QInput } from "quasar";
import type { Slots } from "vue";
import { computed, defineComponent, ref } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";

import { propOptions } from "./api";
import { icons } from "./Input.extras";

export default defineComponent({
  name: "s-input",
  props: {
    modelValue: propOptions(is.stringU),
    resetButton: propOptions.boolean()
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
      passThroughSlots: computed<Slots>(() => o.omit(slots, "append")),
      reset(): void {
        emit("update:model-value", undefined);
        assert.not.empty(input.value);
        input.value.focus();
      },
      updateModelValue(value: unknown): void {
        assert.string(value);
        emit("update:model-value", value ? value : undefined);
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
    <template #append>
      <slot name="append">
        <q-icon
          v-if="resetButton"
          v-show="canReset"
          class="cursor-pointer reset"
          :name="icons.close"
          @click="reset"
        />
      </slot>
    </template>
    <template v-for="(slot, name) in passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-input>
</template>
