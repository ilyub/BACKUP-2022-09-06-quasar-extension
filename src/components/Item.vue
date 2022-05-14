<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Item] */

import { prop, parentProps, validateProps, plugins, directives } from "./api";
import { is } from "@skylib/functions";
import { computed, defineComponent } from "vue";
import type { Item } from "./Item.extras";

export default defineComponent({
  name: "m-item",
  directives: { debugId: directives.debugId("item") },
  props: {
    ...parentProps<Item.ParentProps>(),
    caption: prop<Item.Props["caption"]>(),
    icon: prop<Item.Props["icon"]>()
  },
  setup: props => {
    validateProps<Item.OwnProps>(props);

    return {
      hasCaption: computed(() => is.not.empty(props.caption)),
      hasIcon: computed(() => is.not.empty(props.icon)),
      slotNames: plugins.useSlotNames<Item.Slots>()(
        "caption",
        "default",
        "icon"
      )
    };
  }
});
</script>

<template>
  <q-item class="m-item">
    <q-item-section
      v-if="hasIcon || slotNames.has('icon')"
      v-debug-id="'icon'"
      side
    >
      <slot :name="slotNames.icon">
        <q-icon :name="icon" />
      </slot>
    </q-item-section>
    <q-item-section
      v-if="hasCaption || slotNames.has('caption')"
      v-debug-id="'caption'"
      no-wrap
    >
      <slot :name="slotNames.caption">
        {{ caption }}
      </slot>
    </q-item-section>
    <slot :name="slotNames.default"></slot>
  </q-item>
</template>
