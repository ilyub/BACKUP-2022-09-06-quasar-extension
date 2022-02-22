<script lang="ts">
import { computed, defineComponent } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import type { unknowns, Writable } from "@skylib/functions/es/types/core";

import { propOptions, propsToPropDefinitions, validateProps } from "./api";
import { usePageContentHeight } from "./api/pageContentHeight";
import { useSlotsNames } from "./api/slotNames";
import { isVirtualScrollEvent } from "./extras/QVirtualScroll";
import type {
  Columns,
  PageTableOwnProps,
  PageTableParentProps,
  PageTableSlots
} from "./PageTable.extras";
import { injectPageTableSettings, isColumnsFactory } from "./PageTable.extras";

export default defineComponent({
  name: "m-page-table",
  props: {
    ...propsToPropDefinitions<PageTableParentProps>(),
    columns: propOptions.default(isColumnsFactory(), []),
    extraPageOffset: propOptions(is.stringU),
    limit: propOptions(is.numberU),
    rows: propOptions.default(is.array, []),
    selected: propOptions.default(is.array, [])
  },
  emits: {
    "update:limit": (value: number) => is.number(value),
    "update:selected": (value: unknowns) => is.array(value)
  },
  setup(props, { emit }) {
    validateProps<PageTableOwnProps>(props);

    const settings = injectPageTableSettings();

    return {
      bodyCellSlotData(data: unknown): unknown {
        return data;
      },
      height: usePageContentHeight(() => props.extraPageOffset),
      onScroll(event: unknown): void {
        assert.byGuard(event, isVirtualScrollEvent);

        if (is.not.empty(props.limit) && event.to === props.limit - 1)
          emit("update:limit", props.limit + settings.value.growPageBy);
      },
      slotNames: useSlotsNames<PageTableSlots>()("body-cell"),
      tableColumns: computed<Writable<Columns>>(() => a.clone(props.columns)),
      tableRows: computed<Writable<unknowns>>(() => a.clone(props.rows)),
      tableSelected: computed<Writable<unknowns>>(() => a.clone(props.selected))
    };
  }
});
</script>

<template>
  <q-table
    class="sticky-header-table"
    :columns="tableColumns"
    :rows="tableRows"
    :rows-per-page-options="[0]"
    :selected="tableSelected"
    :style="{
      height
    }"
    virtual-scroll
    :virtual-scroll-item-size="48"
    :virtual-scroll-sticky-size-start="48"
    @update:selected="$emit('update:selected', $event)"
    @virtual-scroll="onScroll"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]>
      <slot :name="slotName"></slot>
    </template>
    <template v-if="$slots[slotNames.bodyCell]" #body-cell="data">
      <slot :name="slotNames.bodyCell" v-bind="bodyCellSlotData(data)"></slot>
    </template>
  </q-table>
</template>
