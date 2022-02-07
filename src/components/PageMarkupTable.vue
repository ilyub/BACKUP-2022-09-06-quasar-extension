<script lang="ts">
import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import { usePageContentHeight } from "./api/pageContentHeight";
import type { PageMarkupTablePropOptions } from "./PageMarkupTable.extras";

export default defineComponent({
  name: "x-page-markup-table",
  props: {
    ...({} as PageMarkupTablePropOptions),
    extraPageOffset: propOptions(is.stringU)
  },
  setup(props: SetupProps<PageMarkupTablePropOptions>) {
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
