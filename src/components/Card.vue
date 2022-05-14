<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Card] */

import { Card } from "./Card.extras";
import { prop, parentProps, validateProps, plugins } from "./api";
import { is } from "@skylib/functions";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "m-card",
  props: {
    ...parentProps<Card.ParentProps>(),
    minWidth: prop<Card.Props["minWidth"]>(),
    title: prop<Card.Props["title"]>(),
    transparentHeader: prop.boolean()
  },
  setup: props => {
    validateProps<Card.OwnProps>(props);

    return {
      hasTitle: computed(() => is.not.empty(props.title)),
      icons: Card.icons,
      slotNames: plugins.useSlotNames<Card.Slots>()(
        "default",
        "header-actions",
        "title"
      )
    };
  }
});
</script>

<template>
  <q-card class="m-card" :style="{ minWidth: minWidth }">
    <template #default>
      <m-card-section
        v-if="hasTitle || slotNames.has('title')"
        class="m-card__header"
        :class="
          transparentHeader
            ? 'm-card__header__transparent'
            : 'm-card__header__default'
        "
      >
        <slot :name="slotNames.title">{{ title }}</slot>
        <div class="m-card__header__actions">
          <slot :name="slotNames.headerActions"></slot>
          <m-icon-button v-close-popup :icon="icons.close" />
        </div>
      </m-card-section>
      <slot :name="slotNames.default"></slot>
    </template>
  </q-card>
</template>
