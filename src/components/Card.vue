<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[Card] */

import { defineComponent } from "vue";

import { prop, propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { CardOwnProps, CardParentProps, CardSlots } from "./Card.extras";
import { icons } from "./Card.extras";

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
      minWidth
    }"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
    <template #default>
      <m-card-section
        :class="
          transparentHeader
            ? 'items-center q-pb-none row text-h6'
            : 'bg-primary items-center q-pr-sm row text-h6 text-white'
        "
      >
        <slot :name="slotNames.title">{{ title }}</slot>
        <q-space v-if="!transparentHeader" />
        <div :class="{ 'm-card__header-actions': transparentHeader }">
          <slot :name="slotNames.headerActions"></slot>
          <m-icon-button v-close-popup :icon="icons.close" />
        </div>
      </m-card-section>
      <slot :name="slotNames.default"></slot>
    </template>
  </q-card>
</template>
