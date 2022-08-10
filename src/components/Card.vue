<script lang="ts">
/* eslint-disable @skylib/quasar-extension/vue/template/prefer-m-card -- Ok */

import { computed, defineComponent, ref } from "vue";
import { parentProps, plugins, propFactory, validateProps } from "./api";
import { Card } from "./Card.extras";
import type { Exposed } from "./api";
import type { QCard } from "quasar";
import { is } from "@skylib/functions";

const prop = propFactory<Card.OwnProps>();

export default defineComponent({
  name: "m-card",
  props: {
    ...parentProps<Card.ParentProps>(),
    ...plugins.langProps.props("title"),
    minWidth: prop("minWidth"),
    transparentHeader: prop.boolean("transparentHeader")
  },
  setup: (props, { expose }) => {
    const { icons } = Card;

    const main = ref<QCard>();

    const { title } = plugins.langProps(props, "title");

    const exposed: Exposed<Card.Global> = { main };

    validateProps<Card.OwnProps>(props);
    expose(exposed);

    return {
      hasTitle: computed(() => is.not.empty(title.value)),
      icons,
      main,
      slotNames: plugins.slotNames<Card.Slots>()(
        "default",
        "header-actions",
        "title"
      ),
      title
    };
  }
});
</script>

<template>
  <q-card ref="main" class="m-card" :style="{ minWidth }">
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
