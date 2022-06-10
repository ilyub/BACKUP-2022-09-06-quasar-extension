<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.BaseButton] */

import { BaseButton } from "./BaseButton.extras";
import {
  injections,
  parentProps,
  plugins,
  prop,
  validateExpose,
  validateProps
} from "./api";
import { as, is } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { QBtn } from "quasar";

export default defineComponent({
  name: "m-base-button",
  props: {
    ...parentProps<BaseButton.ParentProps>(),
    ...plugins.asyncClick.props,
    ...plugins.confirmedClick.props,
    ...plugins.langProps.props("label", "tooltip"),
    disable: prop.boolean(),
    loading: prop.boolean(),
    tooltipDirection: prop<BaseButton.Props["tooltipDirection"]>(),
    type: prop<BaseButton.Props["type"]>()
  },
  setup: (props, { expose }) => {
    const { label, tooltip } = plugins.langProps(props, "label", "tooltip");

    const asyncClick = plugins.asyncClick(props);

    const confirmedClick = plugins.confirmedClick(props);

    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const globalDisable = injections.disable.inject();

    const globalSubmitting = injections.submitting.inject();

    const main = ref<QBtn>();

    const settings = BaseButton.injectSettings();

    validateExpose<BaseButton.Global>(expose, exposed);
    validateProps<BaseButton.OwnProps>(props);

    return {
      click: (): void => {
        asyncClick();
        confirmedClick();
      },
      hasTooltip: computed(() => is.not.empty(tooltip.value)),
      label,
      main,
      mainDisable: computed(
        () => props.disable || globalDisable.value || asyncClick.active.value
      ),
      mainLoading: computed(() => {
        if (props.loading) return true;

        if (asyncClick.active.value && settings.value.animateAsyncClick)
          return true;

        if (
          props.type === "submit" &&
          globalSubmitting.value &&
          settings.value.animateSubmitting
        )
          return true;

        return false;
      }),
      slotNames: plugins.slotNames<BaseButton.Slots>()("default"),
      tooltip
    };
  }
});
</script>

<template>
  <q-btn
    ref="main"
    class="m-base-button"
    :disable="mainDisable"
    :label="label"
    :loading="mainLoading"
    :type="type"
    @click="click"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #default="data">
      <slot :name="slotNames.default" v-bind="data ?? {}"></slot>
      <m-tooltip v-if="hasTooltip" :direction="tooltipDirection">
        {{ tooltip }}
      </m-tooltip>
    </template>
  </q-btn>
</template>
