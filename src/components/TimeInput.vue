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
import { a, as, cast, is, o } from "@skylib/functions";
import { maska } from "maska";
import { computed, defineComponent } from "vue";
import type { TimeInput } from "./TimeInput.extras";
import type { numberU, NumStrE } from "@skylib/functions";

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

    return {
      inputChange: (
        event: Event,
        emitValue: (value: NumStrE) => void
      ): void => {
        const parts = o
          .get(as.not.empty(event.target), "value", is.string)
          .split(":");

        emitValue(
          parts.length === 1
            ? a.first(parts)
            : // eslint-disable-next-line no-warning-comments -- Use a.second
              // fixme
              60 * cast.number(a.first(parts)) + cast.number(a.get(parts, 1))
        );
      },
      inputMask: { mask: "#*!:F#", tokens: { F: { pattern: /[0-5]/u } } },
      inputValue: computed(() => {
        if (is.not.empty(props.modelValue)) {
          const hours = Math.floor(props.modelValue / 60);

          const minutes = props.modelValue % 60;

          const minutes1 = Math.floor(minutes / 10);

          const minutes2 = minutes % 10;

          return `${hours}:${minutes1}${minutes2}`;
        }

        return "";
      }),
      slotNames: plugins.useSlotNames<TimeInput.Slots>()("control")
    };
  }
});
</script>

<template>
  <m-numeric-input
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
          v-maska="inputMask"
          class="q-field__input"
          :value="inputValue"
          @change="inputChange($event, data.emitValue)"
        />
      </slot>
    </template>
  </m-numeric-input>
</template>
