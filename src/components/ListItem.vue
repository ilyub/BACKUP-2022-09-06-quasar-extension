<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[ListItem] */

import { computed, defineComponent, useAttrs } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions, propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  ListItemOwnProps,
  ListItemParentProps,
  ListItemSlots
} from "./ListItem.extras";

export default defineComponent({
  name: "m-list-item",
  props: {
    ...propsToPropDefinitions<ListItemParentProps>(),
    caption: propOptions(is.stringU),
    icon: propOptions(is.stringU)
  },
  setup(props) {
    validateProps<ListItemOwnProps>(props);

    const attrs = useAttrs();

    const slotNames = useSlotsNames<ListItemSlots>()(
      "caption",
      "default",
      "icon"
    );

    return {
      clickable: computed<boolean>(() => is.not.empty(attrs["onClick"])),
      hasCaption: computed<boolean>(() => is.not.empty(props.caption)),
      hasIcon: computed<boolean>(() => is.not.empty(props.icon)),
      slotNames
    };
  }
});
</script>

<template>
  <q-item class="m-list-iteml" :clickable="clickable">
    <q-item-section v-if="hasIcon || $slots[slotNames.icon]" side>
      <slot :name="slotNames.icon">
        <q-icon :name="icon" />
      </slot>
    </q-item-section>
    <q-item-section v-if="hasCaption || $slots[slotNames.caption]" no-wrap>
      <slot :name="slotNames.caption">
        {{ caption }}
      </slot>
    </q-item-section>
    <slot :name="slotNames.default"></slot>
  </q-item>
</template>
