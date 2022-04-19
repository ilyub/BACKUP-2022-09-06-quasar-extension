<script lang="ts">
import { handlePromise } from "@skylib/facades";
import { assert } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type {
  FormOwnProps,
  FormParentProps,
  FormSlots,
  OnSubmit,
  OnSubmitAsync
} from "./Form.extras";
import { injectDisable, provideDisable } from "./Switchable.extras";
import {
  prop,
  propsToPropDefinitions,
  validateProps,
  useSlotsNames
} from "./api";

export default defineComponent({
  name: "m-form",
  props: {
    ...propsToPropDefinitions<FormParentProps>(),
    asyncTaskType: prop<handlePromise.Type>(),
    onSubmit: prop<OnSubmit>(),
    onSubmitAsync: prop<OnSubmitAsync>()
  },
  setup(props) {
    validateProps<FormOwnProps>(props);

    const disable = ref(false);

    const parentDisable = injectDisable();

    provideDisable(() => parentDisable.value || disable.value);

    return {
      slotNames: useSlotsNames<FormSlots>()(),
      submit(evt: Event | SubmitEvent): void {
        const { asyncTaskType, onSubmit, onSubmitAsync } = props;

        if (onSubmit) onSubmit(evt);

        if (onSubmitAsync)
          if (asyncTaskType) handlePromise.verbose(submit, asyncTaskType);
          else handlePromise.silent(submit);

        async function submit(): Promise<void> {
          assert.not.empty(onSubmitAsync);
          disable.value = true;
          await onSubmitAsync(evt);
          disable.value = false;
        }
      }
    };
  }
});
</script>

<template>
  <q-form class="m-form" @submit="submit">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </q-form>
</template>
