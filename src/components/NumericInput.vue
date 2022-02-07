<script lang="ts">
import { computed, defineComponent } from "vue";

import * as cast from "@skylib/functions/es/converters";
import * as is from "@skylib/functions/es/guards";
import type { numberU, NumStrE } from "@skylib/functions/es/types/core";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { NumericInputPropOptions } from "./NumericInput.extras";
import { icons } from "./NumericInput.extras";

export default defineComponent({
  name: "x-numeric-input",
  props: {
    ...({} as NumericInputPropOptions),
    max: propOptions.required(is.number),
    min: propOptions.default(is.number, 0),
    modelValue: propOptions.required(is.numberU)
  },
  emits: {
    "update:model-value": (value: numberU) => is.numberU(value)
  },
  // eslint-disable-next-line @skylib/no-mutable-signature, @skylib/prefer-readonly
  setup(props: SetupProps<NumericInputPropOptions>, { emit }) {
    return {
      icons,
      inputModelValue: computed<string>(() => cast.string(props.modelValue)),
      inputUpdateModelValue(value: NumStrE): void {
        emit("update:model-value", cast.numberU(value));
      },
      nextClick(): void {
        if (is.empty(props.modelValue)) emit("update:model-value", props.min);
        else if (props.modelValue < props.max)
          emit("update:model-value", props.modelValue + 1);
      },
      nextClickable: computed<boolean>(
        () => is.empty(props.modelValue) || props.modelValue < props.max
      ),
      prevClick(): void {
        if (is.empty(props.modelValue)) emit("update:model-value", props.max);
        else if (props.modelValue > props.min)
          emit("update:model-value", props.modelValue - 1);
      },
      prevClickable: computed<boolean>(
        () => is.empty(props.modelValue) || props.modelValue > props.min
      )
    };
  }
});
</script>

<template>
  <q-input
    dense
    mask="####################"
    :model-value="inputModelValue"
    @update:model-value="inputUpdateModelValue"
  >
    <template #prepend>
      <q-icon
        :class="{
          'clickable': prevClickable,
          'icon ref-numeric-input-prev': true
        }"
        :name="icons.chevronLeftCircle"
        @click="prevClick"
      />
    </template>
    <template #append>
      <q-icon
        :class="{
          'clickable': nextClickable,
          'icon ref-numeric-input-next': true
        }"
        :name="icons.chevronRightCircle"
        @click="nextClick"
      />
    </template>
  </q-input>
</template>

<style lang="scss" scoped>
.icon {
  color: $item-base-color;

  &.clickable {
    cursor: pointer;

    &:hover {
      color: $grey-7;
    }
  }
}
</style>
