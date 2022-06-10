<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Input] */

import { genericField } from "./Field.generic";
import {
  parentProps,
  plugins,
  prop,
  skipCheck,
  validateEmit,
  validateExpose,
  validateProps
} from "./api";
import { as, cast, o, typedef } from "@skylib/functions";
import { maska } from "maska";
import { computed, defineComponent, ref } from "vue";
import type { Field } from "./Field.extras";
import type { Input } from "./Input.extras";
import type { stringU } from "@skylib/functions";

export default defineComponent({
  name: "m-input",
  directives: { maska },
  components: {
    // eslint-disable-next-line vue/component-options-name-casing -- Wait for https://github.com/vuejs/eslint-plugin-vue/issues/1908
    "m-field__string": genericField<stringU>()
  },
  props: {
    ...parentProps<Input.ParentProps>(),
    mask: prop<Input.Props["mask"]>(),
    modelValue: prop<Input.Props["modelValue"]>()
  },
  emits: { "update:modelValue": (value: stringU) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const input = ref<HTMLInputElement>();

    const main = ref<Field.Global<stringU>>();

    validateEmit<Input.OwnProps>(emit);
    validateExpose<Input.Global>(expose, exposed);
    validateProps<Input.OwnProps>(props);

    return {
      input,
      inputInput: (
        event: Event,
        emitValue: Field.ControlSlotData<stringU>["emitValue"]
      ): void => {
        // eslint-disable-next-line no-restricted-syntax -- Ok
        emitValue(cast.stringU(o.get(as.not.empty(event.target), "value")));
      },
      main,
      slotNames: plugins.slotNames<Input.Slots>()("control"),
      validationOptions: typedef<plugins.validation.Options<stringU>>({
        format: (value: unknown): stringU => cast.stringU(value)
      })
    };
  }
});
</script>

<template>
  <m-field__string
    ref="main"
    class="m-input"
    :focusable-element="input"
    :model-value="modelValue"
    :validation-options="validationOptions"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #control="data">
      <slot v-bind="data ?? {}" :name="slotNames.control">
        <input
          ref="input"
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
