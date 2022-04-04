<script lang="ts">
import { maska } from "maska";
import { computed, defineComponent } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as cast from "@skylib/functions/es/converters";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";
import type { numberU, NumStrE } from "@skylib/functions/es/types/core";

import {
  prop,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  TimeInputOwnProps,
  TimeInputParentProps,
  TimeInputSlots
} from "./TimeInput.extras";
import { icons } from "./TimeInput.extras";

// eslint-disable-next-line no-warning-comments
// fixme
function stepCeil(value: number, step: number): number {
  return Math.ceil(value / step) * step;
}

// eslint-disable-next-line no-warning-comments
// fixme
function stepFloor(value: number, step: number): number {
  return Math.floor(value / step) * step;
}

export default defineComponent({
  name: "m-time-input",
  directives: { maska },
  props: {
    ...propsToPropDefinitions<TimeInputParentProps>(),
    modelValue: prop<number>()
  },
  emits: { "update:modelValue": (value: numberU) => is.numberU(value) },
  setup(props, { emit }) {
    validateEmit<TimeInputOwnProps>(emit);
    validateProps<TimeInputOwnProps>(props);

    return {
      downClick(step: number): void {
        if (is.not.empty(props.modelValue)) {
          const value =
            step === 60
              ? props.modelValue - step
              : stepCeil(props.modelValue, step) - step;

          emit("update:modelValue", value > 0 ? value : undefined);
        }
      },
      downDisable: computed<boolean>(() => is.empty(props.modelValue)),
      icons,
      inputChange(e: Event, emitValue: (value: unknown) => void): void {
        assert.not.empty(e.target);
        emitValue(o.get(e.target, "value", is.string));
      },
      inputMask: { mask: "#*!:F#", tokens: { F: { pattern: /[0-5]/u } } },
      inputUpdateValue(value: NumStrE): void {
        if (is.string(value) && value) {
          const parts = value.split(":").map(part => cast.number(part));

          const hours = a.first(parts);

          const minutes = parts[1] ?? 0;

          emit("update:modelValue", hours * 60 + minutes);
        } else emit("update:modelValue", undefined);
      },
      inputValue: computed<string>(() => {
        if (is.not.empty(props.modelValue)) {
          const hours = Math.floor(props.modelValue / 60);

          const minutes = props.modelValue % 60;

          const minutes1 = Math.floor(minutes / 10);

          const minutes2 = minutes % 10;

          return `${hours}:${minutes1}${minutes2}`;
        }

        return "";
      }),
      slotNames: useSlotsNames<TimeInputSlots>()(
        "append",
        "control",
        "prepend"
      ),
      upClick(step: number): void {
        if (is.not.empty(props.modelValue)) {
          const value =
            step === 60
              ? props.modelValue + step
              : stepFloor(props.modelValue, step) + step;

          emit("update:modelValue", value);
        } else emit("update:modelValue", step);
      }
    };
  }
});
</script>

<template>
  <q-field
    class="time-input"
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
          class="q-field__focusable-action ref-time-input-minutes-up"
          :name="icons.chevronRight"
          @click="upClick(15)"
        />
        <q-icon
          class="q-field__focusable-action ref-time-input-hours-up"
          :name="icons.chevronDoubleRight"
          @click="upClick(60)"
        />
      </slot>
    </template>
    <template #control="{ emitValue }">
      <slot :name="slotNames.control">
        <input
          v-maska="inputMask"
          class="q-field__input ref-time-input-input"
          :value="inputValue"
          @change="inputChange($event, emitValue)"
        />
      </slot>
    </template>
    <template #prepend>
      <slot :name="slotNames.prepend">
        <q-icon
          class="q-field__focusable-action ref-time-input-hours-down"
          :class="{
            'm-time-input__disable': downDisable
          }"
          :name="icons.chevronDoubleLeft"
          @click="downClick(60)"
        />
        <q-icon
          class="q-field__focusable-action ref-time-input-minutes-down"
          :class="{
            'm-time-input__disable': downDisable
          }"
          :name="icons.chevronLeft"
          @click="downClick(15)"
        />
      </slot>
    </template>
  </q-field>
</template>
