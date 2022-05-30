<script lang="ts">
import { NumericInput } from "./NumericInput.extras";
import {
  prop,
  parentProps,
  validateEmit,
  validateProps,
  plugins,
  directives,
  skipCheck
} from "./api";
import { as, cast, is, num, o } from "@skylib/functions";
import { maska } from "maska";
import { computed, defineComponent } from "vue";
import type { numberU, NumStrE } from "@skylib/functions";

export default defineComponent({
  name: "m-numeric-input",
  directives: { debugId: directives.debugId("numeric-input"), maska },
  props: {
    ...parentProps<NumericInput.ParentProps>(),
    ...plugins.useValidation.props,
    bigStep: prop.default<NumericInput.Props["bigStep"]>(1),
    label: prop<NumericInput.Props["label"]>(),
    max: prop.default<NumericInput.Props["max"]>(Number.MAX_VALUE),
    min: prop.default<NumericInput.Props["min"]>(0),
    modelValue: prop<NumericInput.Props["modelValue"]>(),
    placeholder: prop.default<NumericInput.Props["placeholder"]>(""),
    required: prop.boolean(),
    smallStep: prop.default<NumericInput.Props["smallStep"]>(1)
  },
  emits: { "update:modelValue": (value: numberU) => skipCheck(value) },
  setup: (props, { emit }) => {
    validateEmit<NumericInput.OwnProps>(emit);
    validateProps<NumericInput.OwnProps>(props);

    const validation = plugins.useValidation(props, () => props.modelValue);

    return {
      change: validation.change,
      downClick: (step: number): void => {
        if (is.not.empty(props.modelValue))
          if (props.modelValue > props.min)
            emit(
              "update:modelValue",
              Math.max(
                num.ceil.step(props.modelValue, step, props.min) - step,
                props.min
              )
            );
          else if (props.required) {
            // Do nothing
          } else emit("update:modelValue", undefined);
      },
      downDisable: computed(() =>
        is.not.empty(props.modelValue)
          ? props.modelValue <= props.min && props.required
          : true
      ),
      fieldLabel: computed(() =>
        is.not.empty(props.label) && NumericInput.lang.has(props.label)
          ? NumericInput.lang.get(props.label)
          : props.label
      ),
      fieldUpdate: (value: NumStrE): void => {
        emit("update:modelValue", cast.numberU(value));
      },
      fieldValue: computed(() => cast.string(props.modelValue)),
      icons: NumericInput.icons,
      input: (event: Event, emitValue: (value: NumStrE) => void): void => {
        emitValue(o.get(as.not.empty(event.target), "value", is.string));
      },
      main: validation.target,
      rules: validation.rules,
      slotNames: plugins.useSlotNames<NumericInput.Slots>()(
        "append",
        "control",
        "label",
        "prepend"
      ),
      upClick: (step: number): void => {
        if (is.not.empty(props.modelValue))
          if (props.modelValue < props.max)
            emit(
              "update:modelValue",
              Math.min(
                num.floor.step(props.modelValue, step, props.min) + step,
                props.max
              )
            );
          else {
            // Do nothing
          }
        else emit("update:modelValue", props.min);
      },
      upDisable: computed(() =>
        is.not.empty(props.modelValue) ? props.modelValue >= props.max : false
      )
    };
  }
});
</script>

<template>
  <q-field
    ref="main"
    class="m-numeric-input"
    dense
    hide-bottom-space
    :label="fieldLabel"
    :model-value="fieldValue"
    :rules="rules"
    @update:model-value="fieldUpdate"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #control="data">
      <slot :name="slotNames.control" v-bind="data">
        <input
          v-debug-id="'input'"
          v-maska="'#*'"
          class="q-field__input"
          :placeholder="placeholder"
          :value="data.modelValue"
          @change="change"
          @input="input($event, data.emitValue)"
        />
      </slot>
    </template>
    <template #label>
      <slot :name="slotNames.label">
        {{ fieldLabel }}
        <span v-if="required" class="m-numeric-input__required">*</span>
      </slot>
    </template>
    <template #prepend>
      <slot :name="slotNames.prepend">
        <q-icon
          v-if="bigStep > smallStep"
          v-debug-id="'big-down'"
          class="q-field__focusable-action"
          :class="{ 'm-numeric-input__disable': downDisable }"
          :name="icons.chevronDoubleLeft"
          @click="downClick(bigStep)"
        />
        <q-icon
          v-debug-id="'down'"
          class="q-field__focusable-action"
          :class="{ 'm-numeric-input__disable': downDisable }"
          :name="icons.chevronLeft"
          @click="downClick(smallStep)"
        />
      </slot>
    </template>
    <template #append>
      <slot :name="slotNames.append">
        <q-icon
          v-debug-id="'up'"
          class="q-field__focusable-action"
          :class="{ 'm-numeric-input__disable': upDisable }"
          :name="icons.chevronRight"
          @click="upClick(smallStep)"
        />
        <q-icon
          v-if="bigStep > smallStep"
          v-debug-id="'big-up'"
          class="q-field__focusable-action"
          :class="{ 'm-numeric-input__disable': upDisable }"
          :name="icons.chevronDoubleRight"
          @click="upClick(bigStep)"
        />
      </slot>
    </template>
  </q-field>
</template>
