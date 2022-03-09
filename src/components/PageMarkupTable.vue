<script lang="ts">
import { defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions, propsToPropDefinitions, validateProps } from "./api";
import { usePageContentHeight } from "./api/pageContentHeight";
import { useSlotsNames } from "./api/slotNames";
import type {
  PageMarkupTableOwnProps,
  PageMarkupTableParentProps,
  PageMarkupTableSlots
} from "./PageMarkupTable.extras";

export default defineComponent({
  name: "m-page-markup-table",
  props: {
    ...propsToPropDefinitions<PageMarkupTableParentProps>(),
    extraPageOffset: propOptions(is.stringU)
  },
  setup(props) {
    validateProps<PageMarkupTableOwnProps>(props);

    return {
      height: usePageContentHeight(() => props.extraPageOffset),
      slotNames: useSlotsNames<PageMarkupTableSlots>()()
    };
  }
});
</script>

<template>
  <q-markup-table
    class="sticky-table"
    :style="{
      height
    }"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </q-markup-table>
</template>
