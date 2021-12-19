<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { injectRequire, propOptions } from "./api";
import { icons, injectPageLayoutSettings } from "./PageLayout.extras";

export default defineComponent({
  name: "x-page-layout",
  props: {
    closeButton: propOptions.boolean(),
    hideCloseButton: propOptions.boolean(),
    title: propOptions(is.string)
  },
  setup(props) {
    const settings = injectRequire(injectPageLayoutSettings);

    return {
      hasCloseButton: computed<boolean>(() => {
        if (props.closeButton) return true;

        if (props.hideCloseButton) return false;

        return settings.value.closeButton;
      }),
      hasTitle: computed<boolean>(() => is.not.empty(props.title)),
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
          <x-nav-button
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

<style scoped lang="scss">
.body {
  > :deep(*) {
    margin-top: v-bind(sectionMargin);
  }

  > :deep(*:first-child) {
    margin-top: 0;
  }
}
</style>
