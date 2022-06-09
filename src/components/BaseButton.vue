<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.BaseButton] */

import { BaseButton } from "./BaseButton.extras";
import { injections, parentProps, plugins, prop, validateProps } from "./api";
import { is } from "@skylib/functions";
import { QBtn } from "quasar";
import { computed, defineComponent, ref } from "vue";

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
  setup: props => {
    validateProps<BaseButton.OwnProps>(props);

    const { label, tooltip } = plugins.langProps(props, "label", "tooltip");

    const asyncClick = plugins.asyncClick(props);

    const confirmedClick = plugins.confirmedClick(props);

    const disable = computed(() => props.disable && globalDisable.value);

    const globalDisable = injections.disable.inject();

    const globalSubmitting = injections.submitting.inject();

    const settings = BaseButton.injectSettings();

    const submitting = computed(
      () => globalSubmitting.value && props.type === "submit"
    );

    return {
      click: (): void => {
        asyncClick();
        confirmedClick();
      },
      hasTooltip: computed(() => is.not.empty(tooltip.value)),
      label,
      main: ref(QBtn),
      mainDisable: computed(
        () => disable.value || submitting.value || asyncClick.active.value
      ),
      mainLoading: computed(
        () =>
          props.loading ||
          (submitting.value && settings.value.animateSubmitting) ||
          (asyncClick.active.value && settings.value.animateAsyncClick)
      ),
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
