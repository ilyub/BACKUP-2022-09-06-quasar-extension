<script lang="ts">
import { Card } from "./Card.extras";
import {
  parentProps,
  plugins,
  propFactory,
  validateExpose,
  validateProps
} from "./api";
import { is } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { QCard } from "quasar";

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
    const main = ref<QCard>();

    const exposed = { main };

    const { title } = plugins.langProps(props, "title");

    validateExpose<Card.Global>(expose, exposed);
    validateProps<Card.OwnProps>(props);

    return {
      hasTitle: computed(() => is.not.empty(title.value)),
      icons: Card.icons,
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
