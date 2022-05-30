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
import { as, cast, fn, is, o } from "@skylib/functions";
import { maska } from "maska";
import { defineComponent, ref, watch } from "vue";
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

    const formattedValue = ref<string>();

    watch(() => props.modelValue, format);

    return {
      blur: (): void => {
        active.value = false;
        format();
      },
      focus: (): void => {
        active.value = true;
      },
      formattedValue,
      input: (
        event: Event,
        emitValue: NumericInput.ControlSlotData["emitValue"]
      ): void => {
        const value = o.get(as.not.empty(event.target), "value", is.string);

        formattedValue.value = value;

        if (value.includes(":")) {
          const [hours, minutes] = value.split(":").map(cast.number);

          emitValue(60 * as.not.empty(hours) + as.not.empty(minutes));
        } else emitValue(value);
      },
      main: ref<NumericInput.Global>(),
      mask: { mask: "#*:F#", tokens: { F: { pattern: /[0-5]/u } } },
      slotNames: plugins.useSlotNames<TimeInput.Slots>()("control")
    };

    function format(): void {
      if (active.value) {
        // Do not format while editing
      } else
        formattedValue.value = fn.run(() => {
          if (is.not.empty(props.modelValue)) {
            const hours = Math.floor(props.modelValue / 60);

            if (hours) {
              const minutes = props.modelValue % 60;

              const minutes1 = Math.floor(minutes / 10);

              const minutes2 = minutes % 10;

              return `${hours}:${minutes1}${minutes2}`;
            }
          }

          return cast.stringU(props.modelValue);
        });
    }
  }
});
</script>

<template>
  <m-numeric-input
    ref="main"
    :big-step="60"
    class="m-time-input"
    :model-value="modelValue"
    :small-step="15"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #control="data">
      <slot :name="slotNames.control" v-bind="data">
        <input
          v-debug-id="'input'"
          v-maska="mask"
          class="q-field__input"
          :placeholder="data.placeholder"
          :value="formattedValue"
          @blur="blur"
          @change="data.change"
          @focus="focus"
          @input="input($event, data.emitValue)"
        />
      </slot>
    </template>
  </m-numeric-input>
</template>
