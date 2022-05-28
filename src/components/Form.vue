<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Form] */

import {
  prop,
  parentProps,
  validateProps,
  plugins,
  injections,
  skipCheck,
  validateEmit
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
    onSubmitAsync: prop<Form.Props["onSubmitAsync"]>()
  },
  emits: { submit: (event: Event) => skipCheck(event) },
  setup: (props, { emit }) => {
    validateEmit<Form.OwnProps>(emit);
    validateProps<Form.OwnProps>(props);

    const disable = ref(0);

    const globalDisable = injections.globalDisable.inject();

    const main = ref<QForm>();

    const submitting = ref(0);

    injections.globalDisable.provide(
      () => globalDisable.value || disable.value > 0
    );
    injections.submitting.provide(() => submitting.value > 0);

    return {
      main,
      slotNames: plugins.useSlotNames<Form.Slots>()(),
      submit: (event: Event): void => {
        if (props.asyncTaskType)
          handlePromise.verbose(submit, props.asyncTaskType);
        else handlePromise.silent(submit);

        async function submit(): Promise<void> {
          submitting.value++;

          try {
            if (await as.not.empty(main.value).validate()) {
              emit("submit", event);

              if (props.onSubmitAsync) {
                disable.value++;

                try {
                  await props.onSubmitAsync(event);
                } catch {
                  disable.value--;
                }
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
  <q-form ref="main" class="m-form" @submit="submit">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-form>
</template>
