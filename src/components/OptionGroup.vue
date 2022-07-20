<script lang="ts">
/* eslint-disable @skylib/custom/quasar/vue-prefer-m-option-group -- Ok */

import { computed, defineComponent, ref } from "vue";
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
import { OptionGroup } from "./OptionGroup.extras";
import type { QOptionGroup } from "quasar";

const prop = propFactory<OptionGroup.OwnProps>();

interface TranslatedOption extends Omit<OptionGroup.Option, "label"> {
  readonly disable?: boolean;
  readonly label: string;
  readonly value: unknown;
}

export default defineComponent({
  name: "m-option-group",
  props: {
    ...parentProps<OptionGroup.ParentProps>(),
    disable: prop.boolean("disable"),
    inline: prop.boolean("inline"),
    modelValue: prop("modelValue"),
    options: prop.required("options")
  },
  emits: { "update:modelValue": (value: unknown) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const { lang } = OptionGroup;

    const main = ref<QOptionGroup>();

    const exposed: Exposed<OptionGroup.Global> = { main };

    validateEmit<OptionGroup.OwnProps>(emit);
    validateProps<OptionGroup.OwnProps>(props);
    expose(exposed);

    return {
      globalDisable: injections.disable.inject(),
      main,
      mainOptions: computed(() =>
        props.options.map(
          (option): TranslatedOption => ({
            ...option,
            label: lang.get(option.label)
          })
        )
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
