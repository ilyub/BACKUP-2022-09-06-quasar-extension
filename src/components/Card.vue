<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[Card] */

import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { CardPropOptions } from "./Card.extras";
import { icons } from "./Card.extras";
import CardSection from "./CardSection.vue";
import IconButton from "./IconButton.vue";

export default defineComponent({
  name: "x-card",
  components: {
    "x-card-section": CardSection,
    "x-icon-button": IconButton
  },
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as CardPropOptions),
    minWidth: propOptions(is.stringU),
    title: propOptions(is.stringU),
    transparentHeader: propOptions.boolean()
  },
  setup(_props: SetupProps<CardPropOptions>) {
    return {
      icons
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
    <x-card-section
      v-if="transparentHeader"
      class="items-center q-pb-none row text-h6"
    >
      <slot name="title">{{ title }}</slot>
      <div class="header-actions">
        <slot name="header-actions"></slot>
        <x-icon-button v-close-popup :icon="icons.close" />
      </div>
    </x-card-section>
    <x-card-section
      v-else
      class="bg-primary items-center q-pr-sm row text-h6 text-white"
    >
      <slot name="title">{{ title }}</slot>
      <q-space />
      <slot name="header-actions"></slot>
      <x-icon-button v-close-popup :icon="icons.close" />
    </x-card-section>
    <slot></slot>
  </q-card>
</template>

<style lang="scss" scoped>
@use "sass:map";

.header-actions {
  position: absolute;
  top: map.get($space-sm, "y");
  right: map.get($space-sm, "x");
}
</style>
