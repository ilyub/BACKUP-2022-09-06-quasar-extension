<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Card] */

import { Card } from "./Card.extras";
import { parentProps, plugins, prop, validateProps } from "./api";
import { is } from "@skylib/functions";
import { QCard } from "quasar";
import { computed, defineComponent, ref } from "vue";

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
      main: ref(QCard),
      slotNames: plugins.slotNames<Card.Slots>()(
        "default",
        "header-actions",
        "title"
      )
    };
  }
});
</script>

<template>
  <q-card ref="main" class="m-card" :style="{ minWidth: minWidth }">
    <template #default="data">
      <m-card-section
        v-if="hasTitle || slotNames.has('title')"
        class="m-card__header"
        :class="
          transparentHeader
            ? 'm-card__header__transparent'
            : 'm-card__header__default'
        "
      >
        <div class="m-card__header__title">
          <slot :name="slotNames.title">{{ title }}</slot>
        </div>
        <q-space />
        <div class="m-card__header__actions">
          <slot :name="slotNames.headerActions"></slot>
          <m-icon-button v-close-popup :icon="icons.close" />
        </div>
      </m-card-section>
      <slot :name="slotNames.default" v-bind="data ?? {}"></slot>
    </template>
  </q-card>
</template>
