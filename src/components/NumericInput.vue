<script lang="ts">
import { computed, defineComponent } from "vue";

import * as cast from "@skylib/functions/es/converters";
import * as is from "@skylib/functions/es/guards";
import type { numberU, NumStrE } from "@skylib/functions/es/types/core";

import { propOptions, propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  NumericInputOwnProps,
  NumericInputParentProps,
  NumericInputSlots
} from "./NumericInput.extras";
import { icons } from "./NumericInput.extras";

export default defineComponent({
  name: "m-numeric-input",
  props: {
    ...propsToPropDefinitions<NumericInputParentProps>(),
    max: propOptions.required(is.number),
    min: propOptions.default(is.number, 0),
    modelValue: propOptions(is.numberU)
  },
  emits: {
    "update:model-value": (value: numberU) => is.numberU(value)
  },
  setup(props, { emit }) {
    validateProps<NumericInputOwnProps>(props);

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
        else {
          // Not clickable
        }
      },
      nextClickable: computed<boolean>(
        () => is.empty(props.modelValue) || props.modelValue < props.max
      ),
      prevClick(): void {
        if (is.empty(props.modelValue)) emit("update:model-value", props.max);
        else if (props.modelValue > props.min)
          emit("update:model-value", props.modelValue - 1);
        else {
          // Not clickable
        }
      },
      prevClickable: computed<boolean>(
        () => is.empty(props.modelValue) || props.modelValue > props.min
      ),
      slotNames: useSlotsNames<NumericInputSlots>()("append", "prepend")
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
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]>
      <slot :name="slotName"></slot>
    </template>
    <template #append>
      <slot :name="slotNames.append">
        <q-icon
          class="ref-numeric-input-next"
          :class="{
            [$style.clickable]: nextClickable,
            [$style.icon]: true
          }"
          :name="icons.chevronRightCircle"
          @click="nextClick"
        />
      </slot>
    </template>
    <template #prepend>
      <slot :name="slotNames.prepend">
        <q-icon
          class="ref-numeric-input-prev"
          :class="{
            [$style.clickable]: prevClickable,
            [$style.icon]: true
          }"
          :name="icons.chevronLeftCircle"
          @click="prevClick"
        />
      </slot>
    </template>
  </q-input>
</template>

<style lang="scss" module>
@import "~quasar/src/css/variables.sass";

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
