<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions, validateProps } from "./api";
import { injectPageOffset, providePageOffset } from "./api/pageContentHeight";
import { useSlotsNames } from "./api/slotNames";
import type { PageLayoutProps, PageLayoutSlots } from "./PageLayout.extras";
import { icons, injectPageLayoutSettings } from "./PageLayout.extras";

export default defineComponent({
  name: "m-page-layout",
  props: {
    closeButton: propOptions.boolean(),
    hideCloseButton: propOptions.boolean(),
    title: propOptions(is.stringU)
  },
  setup(props) {
    validateProps<PageLayoutProps>(props);

    const hasTitle = computed<boolean>(() => is.not.empty(props.title));

    const pageOffset = injectPageOffset();

    const settings = injectPageLayoutSettings();

    providePageOffset(() => {
      if (is.not.empty(pageOffset.value)) {
        const po = pageOffset.value;

        const hh = settings.value.headerHeight;

        const py = settings.value.paddingY;

        return hasTitle.value
          ? `((${po}) + 2 * ${py} + ${hh})`
          : `((${po}) + 2 * ${py})`;
      }

      return undefined;
    });

    return {
      hasCloseButton: computed<boolean>(() => {
        if (props.closeButton) return true;

        if (props.hideCloseButton) return false;

        return settings.value.closeButton;
      }),
      hasTitle,
      icons,
      padding: computed<string>(
        () => `${settings.value.paddingY} ${settings.value.paddingX}`
      ),
      settings,
      slotNames: useSlotsNames<PageLayoutSlots>()("actions", "default")
    };
  }
});
</script>

<template>
  <div
    :style="{
      padding
    }"
  >
    <div
      v-if="hasTitle"
      :style="{
        height: settings.headerHeight
      }"
    >
      <div class="flex ref-title text-h5">
        {{ title }}
        <template v-if="hasCloseButton">
          <q-space />
          <slot :name="slotNames.actions"></slot>
          <m-icon-button
            class="ref-close-button"
            :icon="icons.close"
            to="/back"
          />
        </template>
      </div>
    </div>
    <div class="body">
      <slot :name="slotNames.default"></slot>
    </div>
  </div>
</template>
