<script lang="ts">
/* eslint-disable @skylib/custom/quasar/vue-prefer-m-btn -- Ok */

import { computed, defineComponent, ref } from "vue";
import {
  injections,
  parentProps,
  plugins,
  propFactory,
  validateExpose,
  validateProps
} from "./api";
import { BaseButton } from "./BaseButton.extras";
import { Form } from "./Form.extras";
import type { QBtn } from "quasar";
import { is } from "@skylib/functions";

const prop = propFactory<BaseButton.OwnProps>();

export default defineComponent({
  name: "m-base-button",
  props: {
    ...parentProps<BaseButton.ParentProps>(),
    ...plugins.asyncClick.props,
    ...plugins.confirmedClick.props,
    ...plugins.langProps.props("label", "tooltip"),
    disable: prop.boolean("disable"),
    loading: prop.boolean("loading"),
    tooltipDirection: prop("tooltipDirection"),
    type: prop("type")
  },
  setup: (props, { expose }) => {
    const { label, tooltip } = plugins.langProps(props, "label", "tooltip");

    const asyncClick = plugins.asyncClick(props);

    const confirmedClick = plugins.confirmedClick(props);

    const form = Form.injectForm();

    const globalDisable = injections.disable.inject();

    const main = ref<QBtn>();

    const settings = BaseButton.injectSettings();

    const exposed = { main } as const;

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
          form.submitting.value &&
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
