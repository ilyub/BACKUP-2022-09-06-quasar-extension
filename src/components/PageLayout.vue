<script lang="ts">
import { PageLayout } from "./PageLayout.extras";
import {
  directives,
  override,
  plugins,
  propFactory,
  validateProps
} from "./api";
import { is } from "@skylib/functions";
import { computed, defineComponent } from "vue";

const prop = propFactory<PageLayout.OwnProps>();

export default defineComponent({
  name: "m-page-layout",
  directives: { debugId: directives.debugId("page-layout") },
  props: {
    ...plugins.langProps.props("title"),
    closeButtonOff: prop.boolean<"closeButtonOff">(),
    closeButtonOn: prop.boolean<"closeButtonOn">()
  },
  setup: props => {
    const settings = PageLayout.injectSettings();

    const { title } = plugins.langProps(props, "title");

    validateProps<PageLayout.OwnProps>(props);

    return {
      closeButton: computed(() =>
        override(
          settings.value.closeButton,
          props.closeButtonOn,
          props.closeButtonOff
        )
      ),
      hasTitle: computed(() => is.not.empty(title.value)),
      icons: PageLayout.icons,
      settings,
      slotNames: plugins.slotNames<PageLayout.Slots>()(
        "actions",
        "default",
        "fit",
        "footer",
        "header",
        "sticky-footer",
        "sticky-header"
      ),
      title
    };
  }
});
</script>

<template>
  <div class="m-page-layout" :style="{ height: settings.height }">
    <div v-if="hasTitle" v-debug-id="'title'" class="m-page-layout__title">
      <div class="m-page-layout__title-text">{{ title }}</div>
      <template v-if="closeButton">
        <q-space />
        <slot :name="slotNames.actions"></slot>
        <m-icon-button
          v-debug-id="'close'"
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
      class="m-page-layout__sticky"
    >
      <div
        v-if="slotNames.has('sticky-header')"
        class="m-page-layout__sticky-header"
      >
        <slot :name="slotNames.stickyHeader"></slot>
      </div>
      <div v-if="slotNames.has('default')" class="m-page-layout__body">
        <slot :name="slotNames.default"></slot>
      </div>
      <div
        v-if="slotNames.has('sticky-footer')"
        class="m-page-layout__sticky-footer"
      >
        <slot :name="slotNames.stickyFooter"></slot>
      </div>
    </div>
    <div v-if="slotNames.has('fit')" class="m-page-layout__fit">
      <slot :name="slotNames.fit"></slot>
    </div>
    <div v-if="slotNames.has('footer')" class="m-page-layout__footer">
      <slot :name="slotNames.footer"></slot>
    </div>
  </div>
</template>
