<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.OptionGroup] */

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
import { lang } from "@skylib/facades";
import { computed, defineComponent, ref } from "vue";
import type { OptionGroup } from "./OptionGroup.extras";
import type { QOptionGroup } from "quasar";

const prop = propFactory<OptionGroup.OwnProps>();

export default defineComponent({
  name: "m-option-group",
  props: {
    ...parentProps<OptionGroup.ParentProps>(),
    disable: prop.boolean<"disable">(),
    inline: prop.boolean<"inline">(),
    modelValue: prop<"modelValue">(),
    options: prop.required<"options">()
  },
  emits: { "update:modelValue": (value: unknown) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const main = ref<QOptionGroup>();

    const exposed = { main };

    validateEmit<OptionGroup.OwnProps>(emit);
    validateExpose<OptionGroup.Global>(expose, exposed);
    validateProps<OptionGroup.OwnProps>(props);

    return {
      globalDisable: injections.disable.inject(),
      main,
      mainOptions: computed(() =>
        props.options.map(option => {
          return { ...option, label: lang.get(option.label) };
        })
      ),
      slotNames: plugins.slotNames<OptionGroup.Slots>()()
    };
  }
});
</script>

<template>
  <q-option-group
    ref="main"
    class="m-option-group"
    :class="{ 'm-option-group__inline': inline }"
    dense
    :disable="disable || globalDisable"
    :inline="inline"
    :model-value="modelValue"
    :options="mainOptions"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-option-group>
</template>
