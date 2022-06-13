<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Item] */

import {
  directives,
  parentProps,
  plugins,
  propFactory,
  validateExpose,
  validateProps
} from "./api";
import { is } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { Item } from "./Item.extras";
import type { QItem } from "quasar";

const prop = propFactory<Item.OwnProps>();

export default defineComponent({
  name: "m-item",
  directives: { debugId: directives.debugId("item") },
  props: {
    ...parentProps<Item.ParentProps>(),
    ...plugins.langProps.props("caption"),
    icon: prop<"icon">()
  },
  setup: (props, { expose }) => {
    const { caption } = plugins.langProps(props, "caption");

    const main = ref<QItem>();

    const exposed = { main };

    validateExpose<Item.Global>(expose, exposed);
    validateProps<Item.OwnProps>(props);

    return {
      caption,
      hasCaption: computed(() => is.not.empty(caption.value)),
      hasIcon: computed(() => is.not.empty(props.icon)),
      main,
      slotNames: plugins.slotNames<Item.Slots>()("caption", "default", "icon")
    };
  }
});
</script>

<template>
  <q-item ref="main" class="m-item">
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
