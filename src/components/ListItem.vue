<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[ListItem] */

import { is } from "@skylib/functions";
import { computed, defineComponent } from "vue";
import type {
  ListItemOwnProps,
  ListItemParentProps,
  ListItemSlots
} from "./ListItem.extras";
import {
  prop,
  propsToPropDefinitions,
  validateProps,
  confirmedClickEmits,
  confirmedClickProps,
  useConfirmedClick,
  useSlotsNames
} from "./api";

export default defineComponent({
  name: "m-list-item",
  props: {
    ...propsToPropDefinitions<ListItemParentProps>(),
    ...confirmedClickProps,
    caption: prop<string>(),
    icon: prop<string>()
  },
  emits: confirmedClickEmits,
  setup(props, { emit }) {
    validateProps<ListItemOwnProps>(props);

    const { confirmedClick } = useConfirmedClick(props, emit);

    const slotNames = useSlotsNames<ListItemSlots>()(
      "caption",
      "default",
      "icon"
    );

    return {
      confirmedClick,
      hasCaption: computed<boolean>(() => is.not.empty(props.caption)),
      hasIcon: computed<boolean>(() => is.not.empty(props.icon)),
      slotNames
    };
  }
});
</script>

<template>
  <q-item class="m-list-iteml" clickable @click="confirmedClick">
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
