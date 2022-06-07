<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.OptionGroup] */

import {
  prop,
  parentProps,
  validateEmit,
  validateProps,
  plugins,
  skipCheck
} from "./api";
import { a } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { OptionGroup } from "./OptionGroup.extras";
import type { QOptionGroup } from "quasar";

export default defineComponent({
  name: "m-option-group",
  props: {
    ...parentProps<OptionGroup.ParentProps>(),
    inline: prop.boolean(),
    modelValue: prop<OptionGroup.Props["modelValue"]>(),
    options: prop.required<OptionGroup.Props["options"]>()
  },
  emits: { "update:modelValue": (value: unknown) => skipCheck(value) },
  main: ref<QOptionGroup>(),
  setup: (props, { emit }) => {
    validateEmit<OptionGroup.OwnProps>(emit);
    validateProps<OptionGroup.OwnProps>(props);

    return {
      mainOptions: computed(() => a.clone(props.options)),
      slotNames: plugins.useSlotNames<OptionGroup.Slots>()()
    };
  }
});
</script>

<template>
  <q-option-group
    class="m-option-group"
    :class="{ 'm-option-group__inline': inline }"
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
