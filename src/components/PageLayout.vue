<script lang="ts">
import * as is from "@skylib/functions/es/guards";
import { computed, defineComponent } from "vue";
import type { PageLayoutProps, PageLayoutSlots } from "./PageLayout.extras";
import { icons, injectPageLayoutSettings } from "./PageLayout.extras";
import { prop, validateEmit, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";

export default defineComponent({
  name: "m-page-layout",
  props: {
    closeButtonOff: prop.boolean(),
    closeButtonOn: prop.boolean(),
    title: prop<string>()
  },
  setup(props, { emit }) {
    validateEmit<PageLayoutProps>(emit);
    validateProps<PageLayoutProps>(props);

    const settings = injectPageLayoutSettings();

    return {
      closeButton: computed<boolean>(() =>
        settings.value.closeButton ? !props.closeButtonOff : props.closeButtonOn
      ),
      hasTitle: computed<boolean>(() => is.not.empty(props.title)),
      icons,
      settings,
      slotNames: useSlotsNames<PageLayoutSlots>()(
        "actions",
        "default",
        "fit",
        "footer",
        "header",
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
    <div v-if="hasTitle" class="items-start m-page-layout__title row">
      <div class="m-page-layout__title-text">{{ title }}</div>
      <template v-if="closeButton">
        <q-space />
        <slot :name="slotNames.actions"></slot>
        <m-icon-button
          class="m-page-layout__close"
          :icon="icons.close"
          to="/back"
        />
      </template>
    </div>
    <div v-if="slotNames.has('header')" class="m-page-layout__header">
      <slot :name="slotNames.header"></slot>
    </div>
    <div
      v-if="slotNames.hasSome('default', 'sticky-footer', 'sticky-header')"
      class="flex-grow-1 m-page-layout__sticky overflow-auto-y overflow-hidden-x"
    >
      <div
        v-if="slotNames.has('sticky-header')"
        class="m-page-layout__sticky-header sticky-header"
      >
        <slot :name="slotNames.stickyHeader"></slot>
      </div>
      <div class="m-page-layout__body">
        <slot :name="slotNames.default"></slot>
      </div>
      <div
        v-if="slotNames.has('sticky-footer')"
        class="m-page-layout__sticky-footer sticky-footer"
      >
        <slot :name="slotNames.stickyFooter"></slot>
      </div>
    </div>
    <div
      v-if="slotNames.has('fit')"
      class="flex-grow-1 m-page-layout__fit overflow-hidden"
    >
      <slot :name="slotNames.fit"></slot>
    </div>
    <div v-if="slotNames.has('footer')" class="m-page-layout__footer">
      <slot :name="slotNames.footer"></slot>
    </div>
  </div>
</template>
