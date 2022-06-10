<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Toggle] */

import {
  injections,
  parentProps,
  plugins,
  prop,
  skipCheck,
  validateEmit,
  validateExpose,
  validateProps
} from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { Toggle } from "./Toggle.extras";
import type { QToggle } from "quasar";

export default defineComponent({
  name: "m-toggle",
  props: {
    ...parentProps<Toggle.ParentProps>(),
    ...plugins.label.props,
    disable: prop.boolean(),
    modelValue: prop.boolean()
  },
  emits: { "update:modelValue": (value: boolean) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const { label } = plugins.label(props);

    const main = ref<QToggle>();

    validateEmit<Toggle.OwnProps>(emit);
    validateExpose<Toggle.Global>(expose, exposed);
    validateProps<Toggle.OwnProps>(props);

    return {
      globalDisable: injections.disable.inject(),
      label,
      main,
      slotNames: plugins.slotNames<Toggle.Slots>()()
    };
  }
});
</script>

<template>
  <q-toggle
    ref="main"
    class="m-toggle"
    :disable="disable || globalDisable"
    :label="label"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-toggle>
</template>
