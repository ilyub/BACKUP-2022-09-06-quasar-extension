<script lang="ts">
import { maska } from "maska";
import { computed, defineComponent } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as cast from "@skylib/functions/es/converters";
import * as is from "@skylib/functions/es/guards";
import type { numberU, NumStrE } from "@skylib/functions/es/types/core";

import {
  propOptions,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  NumericInputOwnProps,
  NumericInputParentProps,
  NumericInputSlots
} from "./NumericInput.extras";
import { icons } from "./NumericInput.extras";

// eslint-disable-next-line no-warning-comments
// fixme
function stepCeil(value: number, step: number, from: number): number {
  return Math.ceil((value - from) / step) * step + from;
}

// eslint-disable-next-line no-warning-comments
// fixme
function stepFloor(value: number, step: number, from: number): number {
  return Math.floor((value - from) / step) * step + from;
}

export default defineComponent({
  name: "m-numeric-input",
  directives: { maska },
  props: {
    ...propsToPropDefinitions<NumericInputParentProps>(),
    bigStep: propOptions.default(1),
    max: propOptions.default(Number.MAX_VALUE),
    min: propOptions.default(0),
    modelValue: propOptions<number>(),
    required: propOptions.boolean(),
    smallStep: propOptions.default(1)
  },
  emits: {
    "update:modelValue": (value: numberU) => is.numberU(value)
  },
  setup(props, { emit }) {
    validateEmit<NumericInputOwnProps>(emit);
    validateProps<NumericInputOwnProps>(props);

    return {
      downClick(step: number): void {
        if (is.not.empty(props.modelValue))
          if (props.modelValue > props.min)
            emit(
              "update:modelValue",
              Math.max(
                stepCeil(props.modelValue, step, props.min) - step,
                props.min
              )
            );
          else if (props.required) {
            // Do nothing
          } else emit("update:modelValue", undefined);
      },
      downDisable: computed<boolean>(() =>
        is.not.empty(props.modelValue)
          ? props.modelValue <= props.min && props.required
          : true
      ),
      icons,
      inputChange(e: Event, emitValue: (value: unknown) => void): void {
        assert.object.of(e.target, { value: is.string }, {});
        emitValue(e.target.value);
      },
      inputUpdateValue(value: NumStrE): void {
        emit("update:modelValue", cast.numberU(value));
      },
      inputValue: computed<string>(() => cast.string(props.modelValue)),
      slotNames: useSlotsNames<NumericInputSlots>()(
        "append",
        "control",
        "prepend"
      ),
      upClick(step: number): void {
        if (is.not.empty(props.modelValue))
          if (props.modelValue < props.max)
            emit(
              "update:modelValue",
              Math.min(
                stepFloor(props.modelValue, step, props.min) + step,
                props.max
              )
            );
          else {
            // Do nothing
          }
        else emit("update:modelValue", props.min);
      },
      upDisable: computed<boolean>(() =>
        is.not.empty(props.modelValue) ? props.modelValue >= props.max : false
      )
    };
  }
});
</script>

<template>
  <q-field
    class="m-numeric-input"
    dense
    :model-value="inputValue"
    @update:model-value="inputUpdateValue"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
    <template #append>
      <slot :name="slotNames.append">
        <q-icon
          class="q-field__focusable-action ref-numeric-input-up"
          :class="{
            'm-numeric-input__disable': upDisable
          }"
          :name="icons.chevronRight"
          @click="upClick(smallStep)"
        />
        <q-icon
          v-if="bigStep > 1"
          class="q-field__focusable-action ref-numeric-input-big-up"
          :class="{
            'm-numeric-input__disable': upDisable
          }"
          :name="icons.chevronDoubleRight"
          @click="upClick(bigStep)"
        />
      </slot>
    </template>
    <template #control="{ emitValue }">
      <slot :name="slotNames.control">
        <input
          v-maska="'#*'"
          class="q-field__input ref-numeric-input-input"
          :value="inputValue"
          @change="inputChange($event, emitValue)"
        />
      </slot>
    </template>
    <template #prepend>
      <slot :name="slotNames.prepend">
        <q-icon
          v-if="bigStep > 1"
          class="q-field__focusable-action ref-numeric-input-big-down"
          :class="{
            'm-numeric-input__disable': downDisable
          }"
          :name="icons.chevronDoubleLeft"
          @click="downClick(bigStep)"
        />
        <q-icon
          class="q-field__focusable-action ref-numeric-input-down"
          :class="{
            'm-numeric-input__disable': downDisable
          }"
          :name="icons.chevronLeft"
          @click="downClick(smallStep)"
        />
      </slot>
    </template>
  </q-field>
</template>
