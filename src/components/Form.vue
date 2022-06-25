<script lang="ts">
import { Form } from "./Form.extras";
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
import { handlePromise } from "@skylib/facades";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { QForm } from "quasar";

const prop = propFactory<Form.OwnProps>();

export default defineComponent({
  name: "m-form",
  props: {
    ...parentProps<Form.ParentProps>(),
    asyncTaskType: prop("asyncTaskType"),
    onAsyncSubmit: prop("onAsyncSubmit")
  },
  emits: { submit: (event: Event) => skipCheck(event) },
  setup: (props, { emit, expose }) => {
    const disable = ref(0);

    const globalDisable = injections.disable.inject();

    const main = ref<QForm>();

    const submitting = ref(0);

    const resetValidation = plugins.validation.reset.provide();

    const exposed = {
      main,
      resetValidation: (): void => {
        as.not.empty(main.value).resetValidation();
        resetValidation();
      }
    };

    validateEmit<Form.OwnProps>(emit);
    validateExpose<Form.Global>(expose, exposed);
    validateProps<Form.OwnProps, "onAsyncSubmit">(props);
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
