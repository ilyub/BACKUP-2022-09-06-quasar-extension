<script lang="ts">
import type { QMarkupTableProps } from "quasar";
import { defineComponent } from "vue";

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
  setup(props) {
    return {
      height: usePageContentHeight(() => props.extraPageOffset)
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
    <slot></slot>
  </q-markup-table>
</template>
