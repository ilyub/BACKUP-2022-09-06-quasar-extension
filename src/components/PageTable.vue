<script lang="ts">
import { computed, defineComponent, inject } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";
import { isVirtualScrollEvent } from "./extras/VirtualScroll";
import { usePageContentHeight } from "./PageLayout.extras";
import type { PageTableSettings } from "./PageTable.extras";
import {
  defaultPageTableSettings,
  injectPageTableSettings
} from "./PageTable.extras";

export default defineComponent({
  name: "s-page-table",
  props: {
    extraPageOffset: propOptions.default(is.string, "0px"),
    limit: propOptions(is.numberU)
  },
  emits: {
    "update:limit"(value: unknown) {
      return is.number(value);
    }
  },
  setup(props, { emit }) {
    const settings = inject(
      injectPageTableSettings,
      computed<PageTableSettings>(defaultPageTableSettings)
    );

    return {
      height: usePageContentHeight(() => props.extraPageOffset),
      onScroll(event: unknown): void {
        assert.byGuard(event, isVirtualScrollEvent);

        if (is.not.empty(props.limit) && event.to === props.limit - 1)
          emit("update:limit", props.limit + settings.value.growPageBy);
      }
    };
  }
});
</script>

<template>
  <q-table
    class="sticky-header-table"
    :rows-per-page-options="[0]"
    :style="{
      height
    }"
    virtual-scroll
    :virtual-scroll-item-size="48"
    :virtual-scroll-sticky-size-start="48"
    @virtual-scroll="onScroll"
  >
    <template v-for="(slot, name) in $slots" #[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
  </q-table>
</template>
