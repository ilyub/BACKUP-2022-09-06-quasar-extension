<script lang="ts">
/* eslint-disable @skylib/custom/quasar/vue-prefer-m-knob -- Ok */

import { defineComponent, ref } from "vue";
import {
  injections,
  parentProps,
  plugins,
  propFactory,
  skipCheck,
  validateEmit,
  validateProps
} from "./api";
import type { Exposed } from "./api";
import type { Knob } from "./Knob.extras";
import type { QKnob } from "quasar";

const prop = propFactory<Knob.OwnProps>();

export default defineComponent({
  name: "m-knob",
  props: {
    ...parentProps<Knob.ParentProps>(),
    disable: prop.boolean("disable"),
    inline: prop.boolean("inline"),
    modelValue: prop.required("modelValue")
  },
  emits: { "update:modelValue": (value: number) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const main = ref<QKnob>();

    const exposed: Exposed<Knob.Global> = { main };

    validateEmit<Knob.OwnProps>(emit);
    validateProps<Knob.OwnProps>(props);
    expose(exposed);

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
