<script lang="ts">
import { genericField } from "./Field.generic";
import { NumericInput } from "./NumericInput.extras";
import {
  directives,
  parentProps,
  plugins,
  propFactory,
  skipCheck,
  validateEmit,
  validateExpose,
  validateProps
} from "./api";
import { as, cast, is, num, o } from "@skylib/functions";
import { maska } from "maska";
import { computed, defineComponent, ref } from "vue";
import type { Field } from "./Field.extras";
import type { numberU } from "@skylib/functions";

const prop = propFactory<NumericInput.OwnProps>();

export default defineComponent({
  name: "m-numeric-input",
  components: { "m-field__number": genericField<numberU>() },
  directives: { debugId: directives.debugId("numeric-input"), maska },
  props: {
    ...parentProps<NumericInput.ParentProps>(),
    bigStep: prop.default("bigStep", 1),
    max: prop.default("max", Number.MAX_VALUE),
    min: prop.default("min", 0),
    modelValue: prop("modelValue"),
    required: prop.boolean("required"),
    smallStep: prop.default("smallStep", 1),
    validationOptions: prop("validationOptions")
  },
  emits: { "update:modelValue": (value: numberU) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const input = ref<HTMLInputElement>();

    const main = ref<Field.Global<numberU>>();

    const exposed = { main };

    validateEmit<NumericInput.OwnProps>(emit);
    validateExpose<NumericInput.Global>(expose, exposed);
    validateProps<NumericInput.OwnProps>(props);

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
      format: cast.numberU,
      icons: NumericInput.icons,
      input,
      inputInput: (
        event: Event,
        emitValue: Parameters<Field.Slots["control"]>[0]["emitValue"]
      ): void => {
        emitValue(o.get(as.not.empty(event.target), "value"));
      },
      main,
      mainValidationOptions: computed<plugins.validation.OptionsProp<numberU>>(
        () => {
          return {
            max: props.max,
            min: props.min,
            ...props.validationOptions
          };
        }
      ),
      slotNames: plugins.slotNames<NumericInput.Slots>()(
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
    :format="format"
    :model-value="modelValue"
    :required="required"
    :validation-options="mainValidationOptions"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #control="data">
      <slot :name="slotNames.control" v-bind="data ?? {}">
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
