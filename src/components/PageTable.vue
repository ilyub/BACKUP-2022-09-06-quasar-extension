<script lang="ts">
import type { QTable } from "quasar";
import { computed, defineComponent, ref } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";
import type { unknowns, Writable } from "@skylib/functions/es/types/core";

import { propOptions, propsToPropDefinitions, validateProps } from "./api";
import { usePageContentHeight } from "./api/pageContentHeight";
import { useSlotsNames } from "./api/slotNames";
import { isVirtualScrollEvent } from "./extras/QVirtualScroll";
import type {
  Columns,
  PageTableOwnProps,
  PageTableParentProps,
  PageTableSlots,
  Pagination
} from "./PageTable.extras";
import {
  injectPageTableSettings,
  isColumnsFactory,
  isPagination
} from "./PageTable.extras";

export default defineComponent({
  name: "m-page-table",
  props: {
    ...propsToPropDefinitions<PageTableParentProps>(),
    columns: propOptions.default(isColumnsFactory(), []),
    extraPageOffset: propOptions(is.stringU),
    pagination: propOptions.default(isPagination, {}),
    rows: propOptions.default(is.array, []),
    selected: propOptions.default(is.array, [])
  },
  emits: {
    "update:pagination": (value: Pagination) => isPagination(value),
    "update:selected": (value: unknowns) => is.array(value)
  },
  setup(props, { emit }) {
    validateProps<PageTableOwnProps>(props);

    const settings = injectPageTableSettings();

    const table = ref<QTable | undefined>(undefined);

    return {
      bodyCellSlotData(data: unknown): unknown {
        return data;
      },
      height: usePageContentHeight(() => props.extraPageOffset),
      onScroll(event: unknown): void {
        assert.byGuard(event, isVirtualScrollEvent);

        if (
          is.not.empty(props.pagination.limit) &&
          event.to === props.pagination.limit - 1
        )
          emit("update:pagination", {
            ...props.pagination,
            limit: props.pagination.limit + settings.value.growPageBy
          });
      },
      slotNames: useSlotsNames<PageTableSlots>()("body-cell"),
      table,
      tableColumns: computed<Writable<Columns>>(() => a.clone(props.columns)),
      tableRows: computed<Writable<unknowns>>(() => a.clone(props.rows)),
      tableSelected: computed<Writable<unknowns>>(() =>
        a.clone(props.selected)
      ),
      tableUpdatePagination(pagination: Pagination): void {
        if (
          pagination.descending !== props.pagination.descending ||
          pagination.sortBy !== props.pagination.sortBy
        )
          table.value?.scrollTo(0, "start");

        emit(
          "update:pagination",
          o.removeUndefinedKeys({
            ...props.pagination,
            ...pagination,
            sortBy: is.not.empty(pagination.sortBy)
              ? pagination.sortBy
              : undefined
          })
        );
      }
    };
  }
});
</script>

<template>
  <q-table
    ref="table"
    class="sticky-header-table"
    :columns="tableColumns"
    :pagination="pagination"
    :rows="tableRows"
    :rows-per-page-options="[0]"
    :selected="tableSelected"
    :style="{
      height
    }"
    virtual-scroll
    :virtual-scroll-item-size="48"
    :virtual-scroll-sticky-size-start="48"
    @update:pagination="tableUpdatePagination"
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
