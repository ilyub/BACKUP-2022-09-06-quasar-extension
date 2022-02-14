<script lang="ts">
import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import { usePageContentHeight } from "./api/pageContentHeight";
import type { PageMarkupTableProps } from "./PageMarkupTable.extras";

export default defineComponent({
  name: "m-page-markup-table",
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as PageMarkupTableProps),
    extraPageOffset: propOptions(is.stringU)
  },
  setup(props: SetupProps<PageMarkupTableProps>) {
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
