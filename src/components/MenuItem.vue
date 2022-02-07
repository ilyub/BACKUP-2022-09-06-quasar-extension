<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { MenuItemPropOptions } from "./MenuItem.extras";

export default defineComponent({
  name: "x-menu-item",
  props: {
    ...({} as MenuItemPropOptions),
    caption: propOptions.required(is.string),
    header: propOptions.boolean(),
    icon: propOptions(is.stringU)
  },
  setup(props: SetupProps<MenuItemPropOptions>, { slots }) {
    return {
      hasIcon: computed<boolean>(() => is.not.empty(props.icon)),
      hasIconSlot: computed<boolean>(() => is.not.empty(slots["icon"])),
      hasRightSlot: computed<boolean>(() => is.not.empty(slots["right"]))
    };
  }
});
</script>

<template>
  <q-item v-close-popup :clickable="!header">
    <slot name="prepend"></slot>
    <q-item-section v-if="hasIcon || hasIconSlot" side>
      <slot name="icon">
        <q-icon :name="icon" size="20px" />
      </slot>
    </q-item-section>
    <q-item-section no-wrap>
      {{ caption }}
    </q-item-section>
    <q-item-section v-if="hasRightSlot" side>
      <slot name="right"></slot>
    </q-item-section>
    <slot name="append"></slot>
  </q-item>
</template>
