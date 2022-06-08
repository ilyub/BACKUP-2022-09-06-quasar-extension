<script lang="ts">
import { genericField } from "./Field.generic";
import { NumericInput } from "./NumericInput.extras";
import {
  directives,
  parentProps,
  plugins,
  prop,
  skipCheck,
  validateEmit,
  validateProps
} from "./api";
import { as, cast, is, num, o } from "@skylib/functions";
import { maska } from "maska";
import { computed, defineComponent, ref } from "vue";
import type { Field } from "./Field.extras";
import type { numberU } from "@skylib/functions";

export default defineComponent({
  name: "m-numeric-input",
  components: {
    // eslint-disable-next-line vue/component-options-name-casing -- Wait for https://github.com/vuejs/eslint-plugin-vue/issues/1908
    "m-field__number": genericField<numberU>()
  },
  directives: { debugId: directives.debugId("numeric-input"), maska },
  props: {
    ...parentProps<NumericInput.ParentProps>(),
    bigStep: prop.default<NumericInput.Props["bigStep"]>(1),
    max: prop.default<NumericInput.Props["max"]>(Number.MAX_VALUE),
    min: prop.default<NumericInput.Props["min"]>(0),
    modelValue: prop<NumericInput.Props["modelValue"]>(),
    required: prop.boolean(),
    smallStep: prop.default<NumericInput.Props["smallStep"]>(1),
    validationOptions: prop<NumericInput.Props["validationOptions"]>()
  },
  emits: { "update:modelValue": (value: numberU) => skipCheck(value) },
  setup: (props, { emit }) => {
    validateEmit<NumericInput.OwnProps>(emit);
    validateProps<NumericInput.OwnProps>(props);

    const input = ref<HTMLInputElement>();

    const main = ref<Field.Global<numberU>>();

    return {
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
      icons: NumericInput.icons,
      input,
      inputInput: (
        event: Event,
        emitValue: Field.ControlSlotData<numberU>["emitValue"]
      ): void => {
        // eslint-disable-next-line no-restricted-syntax -- Ok
        emitValue(cast.numberU(o.get(as.not.empty(event.target), "value")));
      },
      main,
      mainValidationOptions: computed<plugins.useValidation.Options<numberU>>(
        () => {
          return {
            format: (value: unknown): numberU => cast.numberU(value),
            max: props.max,
            min: props.min,
            ...props.validationOptions
          };
        }
      ),
      slotNames: plugins.useSlotNames<NumericInput.Slots>()(
        "append",
        "control",
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
  <m-field__number
    ref="main"
    class="m-numeric-input"
    :focusable-element="input"
    :model-value="modelValue"
    :required="required"
    :validation-options="mainValidationOptions"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #control="data">
      <slot v-bind="data ?? {}" :name="slotNames.control">
        <input
          ref="input"
          v-debug-id="'input'"
          v-maska="'#*'"
          class="q-field__input"
          :placeholder="data.placeholder ?? ''"
          :value="data.modelValue"
          @input="inputInput($event, data.emitValue)"
        />
      </slot>
    </template>
    <template #prepend="data">
      <slot :name="slotNames.prepend" v-bind="data ?? {}">
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
    <template #append="data">
      <slot :name="slotNames.append" v-bind="data ?? {}">
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
  </m-field__number>
</template>
