<script lang="ts">
import {
  parentProps,
  prop,
  directives,
  skipCheck,
  plugins,
  validateEmit,
  validateProps
} from "./api";
import { as, cast, is, o, typedef } from "@skylib/functions";
import { maska } from "maska";
import { defineComponent, ref, watch } from "vue";
import type { Field } from "./Field.extras";
import type { NumericInput } from "./NumericInput.extras";
import type { TimeInput } from "./TimeInput.extras";
import type { numberU } from "@skylib/functions";

export default defineComponent({
  name: "m-time-input",
  directives: { debugId: directives.debugId("time-input"), maska },
  props: {
    ...parentProps<TimeInput.ParentProps>(),
    modelValue: prop<TimeInput.Props["modelValue"]>()
  },
  emits: { "update:modelValue": (value: numberU) => skipCheck(value) },
  setup: (props, { emit }) => {
    validateEmit<TimeInput.OwnProps>(emit);
    validateProps<TimeInput.OwnProps>(props);

    const active = ref(false);

    const input = ref<HTMLInputElement>();

    const inputValue = ref<string>();

    watch(() => props.modelValue, updateInputValue, { immediate: true });

    return {
      input,
      inputBlur: (): void => {
        active.value = false;
        updateInputValue();
      },
      inputFocus: (): void => {
        active.value = true;
      },
      inputInput: (
        event: Event,
        emitValue: Field.ControlSlotData<numberU>["emitValue"]
      ): void => {
        const value = o.get(as.not.empty(event.target), "value", is.string);

        inputValue.value = value;

        if (value.includes(":")) {
          const [hours, minutes] = value.split(":").map(cast.number);

          emitValue(60 * as.not.empty(hours) + as.not.empty(minutes));
        } else emitValue(cast.numberU(value));
      },
      inputValue,
      main: ref<NumericInput.Global>(),
      mask: { mask: "#*:F#", tokens: { F: { pattern: /[0-5]/u } } },
      slotNames: plugins.useSlotNames<TimeInput.Slots>()("control"),
      validationOptions: typedef<plugins.useValidation.Options<numberU>>({
        format: (value: unknown): numberU => cast.numberU(value),
        minMaxFormat: format
      })
    };

    function format(value: number): string {
      if (is.not.empty(value)) {
        const hours = Math.floor(value / 60);

        const minutes = value % 60;

        const minutes1 = Math.floor(minutes / 10);

        const minutes2 = minutes % 10;

        return `${hours}:${minutes1}${minutes2}`;
      }

      return cast.string(value);
    }

    function updateInputValue(): void {
      if (active.value) {
        // Do not format while editing
      } else
        inputValue.value = is.not.empty(props.modelValue)
          ? format(props.modelValue)
          : undefined;
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
          @blur="inputBlur"
          @focus="inputFocus"
          @input="inputInput($event, data.emitValue)"
        />
      </slot>
    </template>
  </m-numeric-input>
</template>
