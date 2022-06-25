<script lang="ts">
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
import { as, cast, is, o, typedef } from "@skylib/functions";
import { maska } from "maska";
import { defineComponent, ref, watch } from "vue";
import type { NumericInput } from "./NumericInput.extras";
import type { TimeInput } from "./TimeInput.extras";
import type { numberU, stringU } from "@skylib/functions";

const prop = propFactory<TimeInput.OwnProps>();

export default defineComponent({
  name: "m-time-input",
  directives: { debugId: directives.debugId("time-input"), maska },
  props: {
    ...parentProps<TimeInput.ParentProps>(),
    modelValue: prop("modelValue")
  },
  emits: { "update:modelValue": (value: numberU) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const input = ref<HTMLInputElement>();

    const inputValue = ref<string>();

    const main = ref<NumericInput.Global>();

    const exposed = { main };

    validateEmit<TimeInput.OwnProps>(emit);
    validateExpose<TimeInput.Global>(expose, exposed);
    validateProps<TimeInput.OwnProps>(props);
    watch(() => props.modelValue, valueChanged, { immediate: true });

    return {
      blur: () => {
        inputValue.value = format(props.modelValue);
      },
      focus: () => {
        inputValue.value = format(props.modelValue);
      },
      input,
      inputInput: (
        event: Event,
        emitValue: Parameters<TimeInput.Slots["control"]>[0]["emitValue"]
      ): void => {
        const value = cast.stringU(o.get(as.not.empty(event.target), "value"));

        emitValue(parse(value));
        inputValue.value = value;
      },
      inputValue,
      main,
      mask: { mask: "#*:F#", tokens: { F: { pattern: /[0-5]/u } } },
      slotNames: plugins.slotNames<TimeInput.Slots>()("control"),
      validationOptions: typedef<plugins.validation.OptionsProp<numberU>>({
        minMaxFormat: format
      })
    };

    function format(value: number): string;

    function format(value: numberU): stringU;

    function format(value: numberU): stringU {
      if (is.not.empty(value)) {
        const hours = Math.floor(value / 60);

        const minutes = value % 60;

        const minutes1 = Math.floor(minutes / 10);

        const minutes2 = minutes % 10;

        return `${hours}:${minutes1}${minutes2}`;
      }

      return undefined;
    }

    function parse(value: stringU): numberU {
      if (is.not.empty(value) && value.includes(":")) {
        const [hours, minutes] = value.split(":").map(cast.number);

        return 60 * as.not.empty(hours) + as.not.empty(minutes);
      }

      return cast.numberU(value);
    }

    function valueChanged(): void {
      if (props.modelValue === parse(inputValue.value)) {
        // Keep formatting
      } else inputValue.value = format(props.modelValue);
    }
  }
});
</script>

<template>
  <m-numeric-input
    ref="main"
    :big-step="60"
    class="m-time-input"
    :focusable-element="input"
    :model-value="modelValue"
    :small-step="15"
    :validation-options="validationOptions"
    @blur="blur"
    @focus="focus"
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
          v-maska="mask"
          class="q-field__input"
          :placeholder="data.placeholder ?? ''"
          :value="inputValue"
          @input="inputInput($event, data.emitValue)"
        />
      </slot>
    </template>
  </m-numeric-input>
</template>
