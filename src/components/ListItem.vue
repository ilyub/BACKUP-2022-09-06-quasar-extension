<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[ListItem] */

// eslint-disable-next-line @skylib/disallow-by-regexp
// temp

/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[MenuItem] */

import { computed, defineComponent, useAttrs } from "vue";

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
    icon: propOptions(is.stringU)
  },
  setup(props: SetupProps<ListItemPropOptions>) {
    const attrs = useAttrs();

    return {
      clickable: computed<boolean>(() => is.not.empty(attrs["onClick"])),
      hasCaption: computed<boolean>(() => is.not.empty(props.caption)),
      hasIcon: computed<boolean>(() => is.not.empty(props.icon))
    };
  }
});
</script>

<template>
  <q-item :clickable="clickable">
    <slot>
      <q-item-section v-if="hasIcon" side>
        <q-icon :name="icon" />
      </q-item-section>
      <q-item-section v-if="hasCaption" no-wrap>
        {{ caption }}
      </q-item-section>
    </slot>
  </q-item>
</template>
