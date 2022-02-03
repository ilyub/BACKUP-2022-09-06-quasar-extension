<script lang="ts">
import type { QMarkupTableProps, QMarkupTableSlots } from "quasar";
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import { usePageContentHeight } from "./api/pageContentHeight";

export default defineComponent({
  name: "x-page-markup-table",
  props: {
    ...({} as PropsToPropOptions<QMarkupTableProps>),
    extraPageOffset: propOptions(is.stringU)
  },
  setup(props, { slots }) {
    return {
      height: usePageContentHeight(() => props.extraPageOffset),
      passThroughSlots: computed<Array<keyof QMarkupTableSlots>>(
        () => Object.keys(slots) as Array<keyof QMarkupTableSlots>
      )
    };
  }
});
</script>

<template>
  <q-markup-table
    class="sticky-header-table"
    :style="{
      height
    }"
  >
    <template v-for="name in passThroughSlots" #[name]>
      <slot :name="name"></slot>
    </template>
  </q-markup-table>
</template>
