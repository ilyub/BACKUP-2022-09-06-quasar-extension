<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions, validateEmit, validateProps } from "./api";
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
  setup(props, { emit }) {
    validateEmit<PageLayoutProps>(emit);
    validateProps<PageLayoutProps>(props);

    const settings = injectPageLayoutSettings();

    return {
      hasCloseButton: computed<boolean>(() => {
        if (props.closeButton) return true;

        if (props.hideCloseButton) return false;

        return settings.value.closeButton;
      }),
      hasTitle: computed<boolean>(() => is.not.empty(props.title)),
      icons,
      settings,
      slotNames: useSlotsNames<PageLayoutSlots>()(
        "actions",
        "default",
        "header",
        "footer",
        "raw-footer",
        "raw-header",
        "sticky-footer",
        "sticky-header"
      )
    };
  }
});
</script>

<template>
  <div
    class="column m-page-layout no-wrap"
    :style="{
      height: settings.height
    }"
  >
    <div
      v-if="hasTitle"
      class="items-start m-page-layout__test__title row text-h5"
    >
      <div class="m-page-layout__title">{{ title }}</div>
      <template v-if="hasCloseButton">
        <q-space />
        <slot :name="slotNames.actions"></slot>
        <m-icon-button
          class="m-page-layout__test__close"
          :icon="icons.close"
          to="/back"
        />
      </template>
    </div>
    <slot :name="slotNames.rawHeader">
      <template v-if="slotNames.has('header')">
        <div class="q-pb-sm">
          <slot :name="slotNames.header"></slot>
        </div>
        <q-separator />
      </template>
    </slot>
    <div
      v-if="slotNames.hasSome('default', 'sticky-footer', 'sticky-header')"
      class="flex-grow-1 overflow-auto"
    >
      <div v-if="slotNames.has('sticky-header')" class="sticky-header">
        <slot :name="slotNames.stickyHeader"></slot>
      </div>
      <slot :name="slotNames.default"></slot>
      <div v-if="slotNames.has('sticky-footer')" class="sticky-footer">
        <slot :name="slotNames.stickyFooter"></slot>
      </div>
    </div>
    <slot :name="slotNames.rawFooter">
      <template v-if="slotNames.has('footer')">
        <q-separator />
        <div class="q-pt-sm">
          <slot :name="slotNames.footer"></slot>
        </div>
      </template>
    </slot>
  </div>
</template>
