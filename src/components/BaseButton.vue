<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.BaseButton] */

import { BaseButton } from "./BaseButton.extras";
import { prop, parentProps, validateProps, plugins, injections } from "./api";
import { is } from "@skylib/functions";
import { QBtn } from "quasar";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "m-base-button",
  props: {
    ...parentProps<BaseButton.ParentProps>(),
    ...plugins.useAsyncClick.props,
    ...plugins.useConfirmedClick.props,
    disable: prop.boolean(),
    loading: prop.boolean(),
    tooltip: prop<BaseButton.Props["tooltip"]>(),
    tooltipDirection: prop<BaseButton.Props["tooltipDirection"]>(),
    type: prop<BaseButton.Props["type"]>()
  },
  setup: props => {
    validateProps<BaseButton.OwnProps>(props);

    const asyncClick = plugins.useAsyncClick(props);

    const confirmedClick = plugins.useConfirmedClick(props);

    const disable = computed(() => props.disable && globalDisable.value);

    const globalDisable = injections.disable.inject();

    const globalSubmitting = injections.submitting.inject();

    const settings = BaseButton.injectSettings();

    const submitting = computed(
      () => globalSubmitting.value && props.type === "submit"
    );

    return {
      hasTooltip: computed(() => is.not.empty(props.tooltip)),
      main: ref(QBtn),
      mainClick: (): void => {
        asyncClick();
        confirmedClick();
      },
      mainDisable: computed(
        () => disable.value || submitting.value || asyncClick.active.value
      ),
      mainLoading: computed(
        () =>
          props.loading ||
          (submitting.value && settings.value.animateSubmitting) ||
          (asyncClick.active.value && settings.value.animateAsyncClick)
      ),
      slotNames: plugins.useSlotNames<BaseButton.Slots>()("default")
    };
  }
});
</script>

<template>
  <q-btn
    ref="main"
    class="m-base-button"
    :disable="mainDisable"
    :loading="mainLoading"
    :type="type"
    @click="mainClick"
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
