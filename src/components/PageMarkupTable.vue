<script lang="ts">
import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";
import { usePageContentHeight } from "./PageLayout.extras";

export default defineComponent({
  name: "s-page-markup-table",
  props: {
    extraPageOffset: propOptions.default(is.string, "0px")
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
