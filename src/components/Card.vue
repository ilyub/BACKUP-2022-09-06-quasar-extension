<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[Card] */

import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions, propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { CardOwnProps, CardParentProps, CardSlots } from "./Card.extras";
import { icons } from "./Card.extras";

export default defineComponent({
  name: "m-card",
  props: {
    ...propsToPropDefinitions<CardParentProps>(),
    minWidth: propOptions(is.stringU),
    title: propOptions(is.stringU),
    transparentHeader: propOptions.boolean()
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
    :style="{
      minWidth
    }"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]>
      <slot :name="slotName"></slot>
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
        <div :class="{ [$style.headerActions]: transparentHeader }">
          <slot :name="slotNames.headerActions"></slot>
          <m-icon-button v-close-popup :icon="icons.close" />
        </div>
      </m-card-section>
      <slot :name="slotNames.default"></slot>
    </template>
  </q-card>
</template>

<style lang="scss" module>
@use "sass:map";

@import "~quasar/src/css/variables.sass";

.headerActions {
  position: absolute;
  top: map.get($space-sm, "y");
  right: map.get($space-sm, "x");
}
</style>
