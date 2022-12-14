<script lang="ts">
/* eslint-disable @skylib/quasar-extension/vue/template/no-q-form -- Ok */

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
import { Form } from "./Form.extras";
import type { QForm } from "quasar";
import { as } from "@skylib/functions";
import { handlePromise } from "@skylib/facades";

const prop = propFactory<Form.OwnProps>();

export default defineComponent({
  name: "m-form",
  props: {
    ...parentProps<Form.ParentProps>(),
    asyncSubmit: prop("asyncSubmit"),
    asyncTaskType: prop("asyncTaskType")
  },
  emits: { submit: (event: Event) => skipCheck(event) },
  setup: (props, { emit, expose }) => {
    const disable = ref(0);

    const globalDisable = injections.disable.inject();

    const main = ref<QForm>();

    const submitting = ref(0);

    const resetValidation = plugins.validation.reset.provide();

    const exposed: Exposed<Form.Global> = {
      main,
      resetValidation: (): void => {
        as.not.empty(main.value).resetValidation();
        resetValidation();
      }
    };

    validateEmit<Form.OwnProps>(emit);
    validateProps<Form.OwnProps>(props);
    expose(exposed);
    Form.provideForm({ submitting: computed(() => submitting.value > 0) });
    injections.disable.provide(
      computed(() => globalDisable.value || disable.value > 0)
    );

    return {
      main,
      slotNames: plugins.slotNames<Form.Slots>()(),
      submit: (event: Event): void => {
        handlePromise(props.asyncTaskType, submit);

        async function submit(): Promise<void> {
          submitting.value++;

          try {
            emit("submit", event);

            if (props.asyncSubmit) {
              disable.value++;

              try {
                await props.asyncSubmit(event);
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
