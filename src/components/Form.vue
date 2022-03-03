<script lang="ts">
import { defineComponent, ref } from "vue";

import type { TaskType } from "@skylib/facades/es/handlePromise";
import { handlePromise } from "@skylib/facades/es/handlePromise";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import { createValidationObject } from "@skylib/functions/es/types/core";

import { propOptions, propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { FormOwnProps, FormParentProps, FormSlots } from "./Form.extras";
import { isOnSubmitAsyncU, isOnSubmitU } from "./Form.extras";
import { injectDisable, provideDisable } from "./Switchable.extras";

// eslint-disable-next-line @skylib/disallow-by-regexp
// temp
const TaskTypeVO = createValidationObject<TaskType>({
  createDb: "createDb",
  dbRequest: "dbRequest",
  destroyDb: "destroyDb",
  httpRequest: "httpRequest",
  navigation: "navigation"
});

const isTaskType = is.factory(is.enumeration, TaskTypeVO);

const isTaskTypeU = is.or.factory(isTaskType, is.undefined);

export default defineComponent({
  name: "m-form",
  props: {
    ...propsToPropDefinitions<FormParentProps>(),
    asyncTaskType: propOptions(isTaskTypeU),
    onSubmit: propOptions(isOnSubmitU),
    onSubmitAsync: propOptions(isOnSubmitAsyncU)
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
  <q-form @submit="submit($event)">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]>
      <slot :name="slotName"></slot>
    </template>
  </q-form>
</template>
