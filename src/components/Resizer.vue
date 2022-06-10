<script lang="ts">
import { Resizer } from "./Resizer.extras";
import { prop, skipCheck, validateEmit, validateProps } from "./api";
import { as, assert, is } from "@skylib/functions";
import { computed, defineComponent } from "vue";
import type { numberU } from "@skylib/functions";

const isOffset = is.object.factory<Offset>({ x: is.number, y: is.number }, {});

const isResizerEvent = is.object.factory<ResizerEvent>(
  {
    isFinal: is.boolean,
    isFirst: is.boolean,
    offset: isOffset
  },
  {}
);

interface Offset {
  readonly x: number;
  readonly y: number;
}

interface ResizerEvent {
  readonly isFinal: boolean;
  readonly isFirst: boolean;
  readonly offset: Offset;
}

export default defineComponent({
  name: "m-resizer",
  props: {
    max: prop<Resizer.Props["max"]>(),
    min: prop.default<Resizer.Props["min"]>(0),
    modelValue: prop<Resizer.Props["modelValue"]>()
  },
  emits: { "update:modelValue": (value: number) => skipCheck(value) },
  setup: (props, { emit }) => {
    let initialValue: numberU;

    const settings = Resizer.injectSettings();

    validateEmit<Resizer.OwnProps>(emit);
    validateProps<Resizer.OwnProps>(props);

    return {
      handlePan: (event: unknown): void => {
        assert.byGuard(event, isResizerEvent);

        if (event.isFirst) initialValue = props.modelValue;

        const value = as.not.empty(initialValue) + event.offset.x;

        const limitedValue = limitMin(limitMax(value));

        emit("update:modelValue", limitedValue);

        if (event.isFinal) {
          // Do not set cursor
        } else
          document.documentElement.style.cursor =
            limitedValue === value ? "ew-resize" : "not-allowed";
      },
      show: computed(
        () => is.not.empty(props.modelValue) && !settings.value.disable
      )
    };

    function limitMax(value: number): number {
      return is.not.empty(props.max) ? Math.min(value, props.max) : value;
    }

    function limitMin(value: number): number {
      return Math.max(value, props.min);
    }
  }
});
</script>

<template>
  <div v-if="show" v-touch-pan.horizontal.mouse="handlePan" class="m-resizer">
    <slot></slot>
  </div>
</template>
