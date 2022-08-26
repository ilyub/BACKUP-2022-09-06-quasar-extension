<script lang="ts">
/* eslint-disable @skylib/quasar-extension/vue/template/no-q-toggle -- Ok */

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
import type { QToggle } from "quasar";
import type { Toggle } from "./Toggle.extras";

const prop = propFactory<Toggle.OwnProps>();

export default defineComponent({
  name: "m-toggle",
  props: {
    ...parentProps<Toggle.ParentProps>(),
    ...plugins.langProps.props("label"),
    disable: prop.boolean("disable"),
    modelValue: prop.boolean("modelValue")
  },
  emits: { "update:modelValue": (value: boolean) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const { label } = plugins.langProps(props, "label");

    const main = ref<QToggle>();

    const exposed: Exposed<Toggle.Global> = { main };

    validateEmit<Toggle.OwnProps>(emit);
    validateProps<Toggle.OwnProps>(props);
    expose(exposed);

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
