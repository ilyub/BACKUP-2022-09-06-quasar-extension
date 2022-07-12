<script lang="ts">
import { as, cast, o } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import {
  directives,
  parentProps,
  plugins,
  propFactory,
  skipCheck,
  validateEmit,
  validateProps
} from "./api";
import type { Field } from "./Field.extras";
import type { Input } from "./Input.extras";
import type { SetupExposed } from "./api";
import { genericField } from "./Field.generic";
import { maska } from "maska";
import type { stringU } from "@skylib/functions";

const prop = propFactory<Input.OwnProps>();

export default defineComponent({
  name: "m-input",
  components: { "m-field__string": genericField<stringU>() },
  directives: { debugId: directives.debugId("input"), maska },
  props: {
    ...parentProps<Input.ParentProps>(),
    mask: prop("mask"),
    modelValue: prop("modelValue")
  },
  emits: { "update:modelValue": (value: stringU) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const input = ref<HTMLInputElement>();

    const main = ref<Field.Global<stringU>>();

    const exposed: SetupExposed<Input.Global> = { main };

    validateEmit<Input.OwnProps>(emit);
    validateProps<Input.OwnProps>(props);
    expose(exposed);

    return {
      format: cast.stringU,
      input,
      inputInput: (
        event: Event,
        emitValue: Parameters<Input.Slots["control"]>[0]["emitValue"]
      ): void => {
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
