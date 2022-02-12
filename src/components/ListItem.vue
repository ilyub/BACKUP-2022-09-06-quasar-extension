<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[ListItem] */

// eslint-disable-next-line @skylib/disallow-by-regexp
// temp

/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[MenuItem] */

import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { ListItemPropOptions } from "./ListItem.extras";

export default defineComponent({
  name: "x-list-item",
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as ListItemPropOptions),
    caption: propOptions(is.stringU),
    header: propOptions.boolean(),
    icon: propOptions(is.stringU)
  },
  setup(props: SetupProps<ListItemPropOptions>, { slots }) {
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
    <q-item-section v-if="hasIcon || hasIconSlot" side>
      <slot name="icon">
        <q-icon :name="icon" size="20px" />
      </slot>
    </q-item-section>
    <q-item-section no-wrap>
      <slot>{{ caption }}</slot>
    </q-item-section>
    <q-item-section v-if="hasRightSlot" side>
      <slot name="right"></slot>
    </q-item-section>
  </q-item>
</template>
