<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Form] */

import { prop, parentProps, validateProps, plugins, injections } from "./api";
import { handlePromise } from "@skylib/facades";
import { as } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { Form } from "./Form.extras";

export default defineComponent({
  name: "m-form",
  props: {
    ...parentProps<Form.ParentProps>(),
    asyncTaskType: prop<Form.Props["asyncTaskType"]>(),
    onSubmit: prop<Form.Props["onSubmit"]>(),
    onSubmitAsync: prop<Form.Props["onSubmitAsync"]>()
  },
  setup: props => {
    validateProps<Form.OwnProps>(props);

    const disable = ref(false);

    const globalDisable = injections.globalDisable.inject();

    injections.globalDisable.provide(
      () => globalDisable.value || disable.value
    );

    return {
      slotNames: plugins.useSlotNames<Form.Slots>()(),
      submit: (event: Event): void => {
        if (props.onSubmit) props.onSubmit(event);

        if (props.onSubmitAsync)
          if (props.asyncTaskType)
            handlePromise.verbose(submit, props.asyncTaskType);
          else handlePromise.silent(submit);

        async function submit(): Promise<void> {
          disable.value = true;
          await as.not.empty(props.onSubmitAsync)(event);
          disable.value = false;
        }
      }
    };
  }
});
</script>

<template>
  <q-form class="m-form" @submit="submit">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-form>
</template>
