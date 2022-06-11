<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Knob] */

import {
  injections,
  parentProps,
  plugins,
  propFactory,
  skipCheck,
  validateEmit,
  validateExpose,
  validateProps
} from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { Knob } from "./Knob.extras";
import type { QKnob } from "quasar";

const prop = propFactory<Knob.OwnProps>();

export default defineComponent({
  name: "m-knob",
  props: {
    ...parentProps<Knob.ParentProps>(),
    disable: prop.boolean<"disable">(),
    inline: prop.boolean<"inline">(),
    modelValue: prop.required<"modelValue">()
  },
  emits: { "update:modelValue": (value: number) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<QKnob>();

    validateEmit<Knob.OwnProps>(emit);
    validateExpose<Knob.Global>(expose, exposed);
    validateProps<Knob.OwnProps>(props);

    return {
      globalDisable: injections.disable.inject(),
      main,
      slotNames: plugins.slotNames<Knob.Slots>()()
    };
  }
});
</script>

<template>
  <q-knob
    ref="main"
    class="m-knob"
    :class="{ 'm-knob__inline': inline }"
    color="primary"
    :disable="disable || globalDisable"
    :model-value="modelValue"
    show-value
    size="55px"
    :thickness="0.18"
    track-color="grey-3"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-knob>
</template>
