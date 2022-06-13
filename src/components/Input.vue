<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Input] */

import { genericField } from "./Field.generic";
import {
  directives,
  parentProps,
  plugins,
  propFactory,
  skipCheck,
  validateEmit,
  validateExpose,
  validateProps
} from "./api";
import { as, cast, o } from "@skylib/functions";
import { maska } from "maska";
import { defineComponent, ref } from "vue";
import type { Field } from "./Field.extras";
import type { Input } from "./Input.extras";
import type { stringU } from "@skylib/functions";

const prop = propFactory<Input.OwnProps>();

export default defineComponent({
  name: "m-input",
  directives: { debugId: directives.debugId("input"), maska },
  components: {
    // eslint-disable-next-line vue/component-options-name-casing -- Wait for https://github.com/vuejs/eslint-plugin-vue/issues/1908
    "m-field__string": genericField<stringU>()
  },
  props: {
    ...parentProps<Input.ParentProps>(),
    mask: prop<"mask">(),
    modelValue: prop<"modelValue">()
  },
  emits: { "update:modelValue": (value: stringU) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const input = ref<HTMLInputElement>();

    const main = ref<Field.Global<stringU>>();

    const exposed = { main };

    validateEmit<Input.OwnProps>(emit);
    validateExpose<Input.Global>(expose, exposed);
    validateProps<Input.OwnProps>(props);

    return {
      format: cast.stringU,
      input,
      inputInput: (
        event: Event,
        emitValue: Field.ControlSlotData<stringU>["emitValue"]
      ): void => {
        // eslint-disable-next-line no-restricted-syntax -- Ok
        emitValue(o.get(as.not.empty(event.target), "value"));
      },
      main,
      slotNames: plugins.slotNames<Input.Slots>()("control")
    };
  }
});
</script>

<template>
  <m-field__string
    ref="main"
    class="m-input"
    :focusable-element="input"
    :format="format"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #control="data">
      <slot :name="slotNames.control" v-bind="data ?? {}">
        <input
          ref="input"
          v-debug-id="'input'"
          v-maska="mask"
          class="q-field__input"
          :placeholder="data.placeholder ?? ''"
          :value="data.modelValue"
          @input="inputInput($event, data.emitValue)"
        />
      </slot>
    </template>
  </m-field__string>
</template>
