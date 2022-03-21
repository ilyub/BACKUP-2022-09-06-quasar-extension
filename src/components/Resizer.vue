<script lang="ts">
import { computed, defineComponent } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import type { numberU } from "@skylib/functions/es/types/core";

import { propOptions, validateEmit, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { ResizerProps, ResizerSlots } from "./Resizer.extras";
import { injectResizerSettings } from "./Resizer.extras";

interface Offset {
  readonly x: number;
  readonly y: number;
}

interface ResizerEvent {
  readonly isFinal: boolean;
  readonly isFirst: boolean;
  readonly offset: Offset;
}

const isOffset: is.Guard<Offset> = is.factory(
  is.object.of,
  { x: is.number, y: is.number },
  {}
);

const isResizerEvent: is.Guard<ResizerEvent> = is.factory(
  is.object.of,
  { isFinal: is.boolean, isFirst: is.boolean, offset: isOffset },
  {}
);

export default defineComponent({
  name: "m-resizer",
  props: {
    max: propOptions(is.numberU),
    min: propOptions.default(is.number, 0),
    modelValue: propOptions(is.numberU)
  },
  emits: {
    "update:modelValue": (value: number) => is.number(value)
  },
  setup(props, { emit }) {
    validateEmit<ResizerProps>(emit);
    validateProps<ResizerProps>(props);

    let initialValue: numberU;

    const settings = injectResizerSettings();

    return {
      handlePan(event: unknown): void {
        assert.byGuard(event, isResizerEvent);

        if (event.isFirst) initialValue = props.modelValue;

        assert.not.empty(initialValue);

        const value = initialValue + event.offset.x;

        const limitedValue = limitMin(limitMax(value));

        emit("update:modelValue", limitedValue);

        if (event.isFinal) {
          // Do not set cursor
        } else
          document.documentElement.style.cursor =
            limitedValue === value ? "ew-resize" : "not-allowed";
      },
      show: computed<boolean>(
        () => is.not.empty(props.modelValue) && !settings.value.disable
      ),
      slotNames: useSlotsNames<ResizerSlots>()("default")
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
  <div
    v-if="show"
    v-touch-pan.horizontal.mouse="handlePan"
    :class="$style.root"
  >
    <slot :name="slotNames.default"></slot>
  </div>
</template>

<style lang="scss" module>
.root {
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  width: 5px;
  height: 100%;
  cursor: ew-resize;
}
</style>
