<script lang="ts">
import type { QInputProps } from "quasar";
import { computed, defineComponent } from "vue";

import * as cast from "@skylib/functions/es/converters";
import * as is from "@skylib/functions/es/guards";
import type { NumStrE } from "@skylib/functions/es/types/core";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import { icons } from "./XNumericInput.extras";

export default defineComponent({
  name: "x-numeric-input",
  props: {
    ...({} as PropsToPropOptions<QInputProps>),
    modelValue: propOptions.required(is.number)
  },
  emits: {
    "update:model-value": (value: number) => is.number(value)
  },
  // eslint-disable-next-line @skylib/prefer-readonly
  setup(props, { emit }) {
    return {
      icons,
      inputModelValue: computed<string>(() => cast.string(props.modelValue)),
      inputUpdateModelValue(value: NumStrE): void {
        emit("update:model-value", cast.number(value));
      },
      upDown(delta: number): void {
        emit("update:model-value", cast.number(props.modelValue) + delta);
      }
    };
  }
});
</script>

<template>
  <q-input
    dense
    mask="##########"
    :model-value="inputModelValue"
    @update:model-value="inputUpdateModelValue"
  >
    <template #prepend>
      <q-icon
        class="icon ref-numeric-input-prev"
        :name="icons.chevronLeftCircle"
        @click="upDown(-1)"
      />
    </template>
    <template #append>
      <q-icon
        class="icon ref-numeric-input-next"
        :name="icons.chevronRightCircle"
        @click="upDown(1)"
      />
    </template>
  </q-input>
</template>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
  color: $item-base-color;

  &:hover {
    color: $grey-7;
  }
}
</style>
