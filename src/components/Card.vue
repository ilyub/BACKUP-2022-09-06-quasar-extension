<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[Card] */

import * as is from "@skylib/functions/es/guards";
import { computed, defineComponent } from "vue";
import type { CardOwnProps, CardParentProps, CardSlots } from "./Card.extras";
import { icons } from "./Card.extras";
import { prop, propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";

export default defineComponent({
  name: "m-card",
  props: {
    ...propsToPropDefinitions<CardParentProps>(),
    minWidth: prop<string>(),
    title: prop<string>(),
    transparentHeader: prop.boolean()
  },
  setup(props) {
    validateProps<CardOwnProps>(props);

    return {
      hasTitle: computed<boolean>(() => is.not.empty(props.title)),
      icons,
      slotNames: useSlotsNames<CardSlots>()(
        "default",
        "header-actions",
        "title"
      )
    };
  }
});
</script>

<template>
  <q-card
    class="m-card"
    :style="{
      minWidth: minWidth
    }"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
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
