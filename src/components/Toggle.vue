<script lang="ts">
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
import { defineComponent, ref } from "vue";
import type { Toggle } from "./Toggle.extras";
import type { QToggle } from "quasar";

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

    const exposed = { main };

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
  <!-- eslint-disable-next-line vue/no-restricted-syntax -->
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
