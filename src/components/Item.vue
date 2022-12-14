<script lang="ts">
/* eslint-disable @skylib/quasar-extension/vue/template/no-q-item -- Ok */

import { computed, defineComponent, ref } from "vue";
import {
  directives,
  parentProps,
  plugins,
  propFactory,
  validateProps
} from "./api";
import type { Exposed } from "./api";
import type { Item } from "./Item.extras";
import type { QItem } from "quasar";
import { is } from "@skylib/functions";

const prop = propFactory<Item.OwnProps>();

export default defineComponent({
  name: "m-item",
  directives: { debugId: directives.debugId("item") },
  props: {
    ...parentProps<Item.ParentProps>(),
    ...plugins.langProps.props("caption"),
    icon: prop("icon")
  },
  setup: (props, { expose }) => {
    const { caption } = plugins.langProps(props, "caption");

    const main = ref<QItem>();

    const exposed: Exposed<Item.Global> = { main };

    validateProps<Item.OwnProps>(props);
    expose(exposed);

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
