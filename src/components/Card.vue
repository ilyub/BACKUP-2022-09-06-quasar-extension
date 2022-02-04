<script lang="ts">
import type { QCard } from "quasar";
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import { icons } from "./Card.extras";
import IconButton from "./IconButton.vue";

export default defineComponent({
  name: "x-card",
  components: {
    "x-icon-button": IconButton
  },
  props: {
    ...({} as PropsToPropOptions<QCard>),
    title: propOptions(is.stringU),
    transparentHeader: propOptions.boolean()
  },
  // eslint-disable-next-line @skylib/prefer-readonly
  setup(_props, { slots }) {
    return {
      hasFooterSlot: computed<boolean>(() => is.not.empty(slots["footer"])),
      icons
    };
  }
});
</script>

<template>
  <q-card>
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
    <q-card-section>
      <slot></slot>
    </q-card-section>
    <q-card-actions v-if="hasFooterSlot" class="q-pt-none">
      <slot name="footer"></slot>
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="scss">
@use "sass:map";

.header-actions {
  position: absolute;
  top: map.get($space-sm, "y");
  right: map.get($space-sm, "x");
}
</style>
