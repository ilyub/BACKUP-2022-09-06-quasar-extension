<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Form] */

import {
  injections,
  parentProps,
  plugins,
  prop,
  skipCheck,
  validateEmit,
  validateProps
} from "./api";
import { handlePromise } from "@skylib/facades";
import { as } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { Form } from "./Form.extras";
import type { QForm } from "quasar";

export default defineComponent({
  name: "m-form",
  props: {
    ...parentProps<Form.ParentProps>(),
    asyncTaskType: prop<Form.Props["asyncTaskType"]>(),
    onAsyncSubmit: prop<Form.Props["onAsyncSubmit"]>()
  },
  emits: { submit: (event: Event) => skipCheck(event) },
  setup: (props, { emit }) => {
    validateEmit<Form.OwnProps>(emit);
    validateProps<Form.OwnProps, "onAsyncSubmit">(props);

    const disable = ref(0);

    const globalDisable = injections.disable.inject();

    const main = ref<QForm>();

    const submitting = ref(0);

    const resetValidation = plugins.useValidation.reset.get();

    injections.disable.provide(() => globalDisable.value || disable.value > 0);
    injections.submitting.provide(() => submitting.value > 0);

    return {
      main,
      // eslint-disable-next-line vue/no-unused-properties -- Ok
      resetValidation: (): void => {
        as.not.empty(main.value).resetValidation();
        resetValidation();
      },
      slotNames: plugins.useSlotNames<Form.Slots>()(),
      submit: (event: Event): void => {
        handlePromise(props.asyncTaskType, submit);

        async function submit(): Promise<void> {
          submitting.value++;

          try {
            emit("submit", event);

            if (props.onAsyncSubmit) {
              disable.value++;

              try {
                await props.onAsyncSubmit(event);
              } finally {
                disable.value--;
              }
            }
          } finally {
            submitting.value--;
          }
        }
      }
    };
  }
});
</script>

<template>
  <q-form ref="main" class="m-form" greedy @submit="submit">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-form>
</template>
