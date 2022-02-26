<script lang="ts">
import type { QTable } from "quasar";
import { computed, defineComponent, ref } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as fn from "@skylib/functions/es/function";
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

interface SortMethod {
  /**
   * Sorts rows.
   *
   * @param rows - Rows.
   * @returns Sorted rows.
   */
  (rows: unknowns): unknowns;
}

export default defineComponent({
  name: "m-page-table",
  props: {
    ...propsToPropDefinitions<PageTableParentProps>(),
    columns: propOptions.default(isColumnsFactory(), []),
    externalSorting: propOptions.boolean(),
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
      sortMethod: computed<SortMethod | undefined>(() =>
        props.externalSorting ? fn.identity : undefined
      ),
      table,
      tableColumns: computed<Writable<Columns>>(() => a.clone(props.columns)),
      tableRows: computed<Writable<unknowns>>(() => a.clone(props.rows)),
      tableSelected: computed<Writable<unknowns>>(() =>
        a.clone(props.selected)
      ),
      updatePagination(pagination: Pagination): void {
        pagination = o.removeUndefinedKeys({
          ...props.pagination,
          ...pagination,
          sortBy: is.not.empty(pagination.sortBy)
            ? pagination.sortBy
            : undefined
        });

        emit("update:pagination", pagination);

        const descending1 = pagination.descending ?? false;

        const descending2 = props.pagination.descending ?? false;

        const sortBy1 = pagination.sortBy;

        const sortBy2 = props.pagination.sortBy;

        if (descending1 !== descending2 || sortBy1 !== sortBy2) {
          assert.not.empty(table.value);
          table.value.scrollTo(0, "start");
        }
      }
    };
  }
});
</script>

<template>
  <q-table
    ref="table"
    binary-state-sort
    class="sticky-header-table"
    :columns="tableColumns"
    :pagination="pagination"
    :rows="tableRows"
    :rows-per-page-options="[0]"
    :selected="tableSelected"
    :sort-method="sortMethod"
    :style="{
      height
    }"
    virtual-scroll
    :virtual-scroll-item-size="48"
    :virtual-scroll-sticky-size-start="48"
    @update:pagination="updatePagination"
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
