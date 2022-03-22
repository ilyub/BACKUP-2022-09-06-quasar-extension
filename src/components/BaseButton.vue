<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[BaseButton] */

import { useQuasar } from "quasar";
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import {
  propOptions,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  BaseButtonOwnProps,
  BaseButtonParentProps,
  BaseButtonSlots
} from "./BaseButton.extras";
import { lang } from "./BaseButton.extras";
import { injectDisable } from "./Switchable.extras";
import { isDirectionU } from "./Tooltip.extras";

export default defineComponent({
  name: "m-base-button",
  props: {
    ...propsToPropDefinitions<BaseButtonParentProps>(),
    confirmation: propOptions(is.stringU),
    disable: propOptions.boolean(),
    modelValue: propOptions.boolean(),
    tooltip: propOptions(is.stringU),
    tooltipDirection: propOptions(isDirectionU)
  },
  emits: {
    "confirmedClick": () => true,
    "update:modelValue": (value: boolean) => is.boolean(value)
  },
  setup(props, { emit }) {
    validateEmit<BaseButtonOwnProps>(emit);
    validateProps<BaseButtonOwnProps>(props);

    const $q = useQuasar();

    return {
      click(): void {
        emit("update:modelValue", !props.modelValue);

        if (is.not.empty(props.confirmation))
          $q.dialog({
            cancel: lang.Cancel,
            message: props.confirmation,
            ok: lang.Ok,
            persistent: true,
            title: lang.Confirm
          }).onOk(() => {
            emit("confirmedClick");
          });
      },
      globalDisable: injectDisable(),
      hasTooltip: computed<boolean>(() => is.not.empty(props.tooltip)),
      slotNames: useSlotsNames<BaseButtonSlots>()("default")
    };
  }
});
</script>

<template>
  <q-btn
    class="m-base-button"
    :disable="disable || globalDisable"
    @click="click"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
    <template #default>
      <slot :name="slotNames.default"></slot>
      <m-tooltip v-if="hasTooltip" :direction="tooltipDirection">
        {{ tooltip }}
      </m-tooltip>
    </template>
  </q-btn>
</template>
