<script lang="ts">
import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { CardPropOptions } from "./Card.extras";
import { icons } from "./Card.extras";
import IconButton from "./IconButton.vue";

export default defineComponent({
  name: "x-card",
  components: {
    "x-icon-button": IconButton
  },
  props: {
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
    <q-card-section
      v-if="transparentHeader"
      class="items-center q-pb-none row text-h6"
    >
      <slot name="title">{{ title }}</slot>
      <div class="header-actions">
        <slot name="header-actions"></slot>
        <x-icon-button v-close-popup :icon="icons.close" />
      </div>
    </q-card-section>
    <q-card-section
      v-else
      class="bg-primary items-center q-pr-sm row text-h6 text-white"
    >
      <slot name="title">{{ title }}</slot>
      <q-space />
      <slot name="header-actions"></slot>
      <x-icon-button v-close-popup :icon="icons.close" />
    </q-card-section>
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
