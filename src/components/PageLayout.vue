<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";
import { injectPageOffset, providePageOffset } from "./api/pageContentHeight";
import IconButton from "./IconButton.vue";
import { icons, injectPageLayoutSettings } from "./PageLayout.extras";

export default defineComponent({
  name: "x-page-layout",
  components: {
    "x-icon-button": IconButton
  },
  props: {
    closeButton: propOptions.boolean(),
    hideCloseButton: propOptions.boolean(),
    title: propOptions(is.stringU)
  },
  setup(props) {
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
      sectionMargin: computed<string>(() => settings.value.sectionMargin),
      settings
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
          <slot name="actions"></slot>
          <x-icon-button
            class="ref-close-button"
            :icon="icons.close"
            to="/back"
          />
        </template>
      </div>
    </div>
    <div class="body"><slot></slot></div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  > :deep(*) {
    margin-top: v-bind(sectionMargin);
  }

  > :deep(*:first-child) {
    margin-top: 0;
  }
}
</style>
