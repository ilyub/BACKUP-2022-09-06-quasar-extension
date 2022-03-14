<script lang="ts">
import * as _ from "lodash-es";
import type { QTable, QTableSlots } from "quasar";
import { computed, defineComponent, ref } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as fn from "@skylib/functions/es/function";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";
import type { objects, Writable } from "@skylib/functions/es/types/core";

import {
  propOptions,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { usePageContentHeight } from "./api/pageContentHeight";
import { useSlotsNames } from "./api/slotNames";
import type { VirtualScrollDetails } from "./extras/QVirtualScroll";
import type {
  BodyCellSlotData,
  Columns,
  PageTableOwnProps,
  PageTableParentProps,
  PageTableSlots,
  Pagination,
  SteadyBottomSlotData
} from "./PageTable.extras";
import {
  icons,
  injectPageTableSettings,
  isColumnsFactory,
  isPagination,
  lang
} from "./PageTable.extras";

interface SortMethod {
  (rows: objects): objects;
}

interface RowClick {
  (event: Event, row: unknown, index: number): void;
}

export default defineComponent({
  name: "m-page-table",
  props: {
    ...propsToPropDefinitions<PageTableParentProps>(),
    columns: propOptions.default(isColumnsFactory(), []),
    externalSorting: propOptions.boolean(),
    extraPageOffset: propOptions(is.stringU),
    pagination: propOptions.default(isPagination, {}),
    rowKey: propOptions(is.stringU),
    rows: propOptions.default(is.objects, []),
    selectByRowClick: propOptions.boolean(),
    selected: propOptions.default(is.objects, [])
  },
  emits: {
    "update:pagination": (value: Pagination) => isPagination(value),
    "update:selected": (value: objects) => is.array.of(value, is.object)
  },
  setup(props, { emit }) {
    validateEmit<PageTableOwnProps>(emit);
    validateProps<PageTableOwnProps>(props);

    const selected = computed<Writable<objects>>(() => {
      assert.not.empty(props.rowKey);

      return _.intersectionBy(props.selected, props.rows, props.rowKey);
    });

    const settings = injectPageTableSettings();

    const table = ref<QTable | undefined>(undefined);

    function allSelectedClick(): void {
      emit("update:selected", selected.value.length ? [] : props.rows);
    }

    function steadyBottomSlotData(): SteadyBottomSlotData {
      const allSelected = fn.run(() => {
        switch (selected.value.length) {
          case 0:
            return false;

          case props.rows.length:
            return true;

          default:
            return undefined;
        }
      });

      return {
        allSelected,
        allSelectedClick,
        allSelectedDisable: props.rows.length === 0,
        allSelectedIcon:
          allSelected === false ? icons.selectAll : icons.deselectAll,
        allSelectedLabel:
          allSelected === false ? lang.SelectAll : lang.DeselectAll
      };
    }

    return {
      bodyCellSlotData(
        // eslint-disable-next-line no-warning-comments
        // fixme: Readonly<Parameters -> ReadonlyParameters
        data: Readonly<Parameters<QTableSlots["body-cell"]>[0]>
      ): BodyCellSlotData {
        return {
          ...data,
          ...steadyBottomSlotData()
        };
      },
      empty: computed<boolean>(() => props.rows.length === 0),
      height: usePageContentHeight(() => props.extraPageOffset),
      onScroll(details: VirtualScrollDetails): void {
        if (
          is.not.empty(props.pagination.limit) &&
          details.to === props.pagination.limit - 1
        )
          emit("update:pagination", {
            ...props.pagination,
            limit: props.pagination.limit + settings.value.growPageBy
          });
      },
      rowClick: computed<RowClick | undefined>(() =>
        props.selectByRowClick
          ? (_event: Event, row: unknown): void => {
              assert.object(row);
              assert.not.empty(props.rowKey);
              emit(
                "update:selected",
                a.toggleBy(selected.value, row, props.rowKey)
              );
            }
          : undefined
      ),
      slotNames: useSlotsNames<PageTableSlots>()(
        "body-cell",
        "body-selection",
        "bottom",
        "header-selection",
        "no-data",
        "steady-bottom"
      ),
      sortMethod: computed<SortMethod | undefined>(() =>
        props.externalSorting ? fn.identity : undefined
      ),
      steadyBottomSlotData,
      table,
      tableColumns: computed<Writable<Columns>>(() =>
        o.unfreeze(props.columns)
      ),
      tableRows: computed<Writable<objects>>(() => o.unfreeze(props.rows)),
      tableSelected: computed<Writable<objects>>(() =>
        o.unfreeze(props.selected)
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
    class="sticky-table"
    :columns="tableColumns"
    :pagination="pagination"
    :row-key="rowKey"
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
    @row-click="rowClick"
    @update:pagination="updatePagination"
    @update:selected="$emit('update:selected', $event)"
    @virtual-scroll="onScroll"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
    <template v-if="slotNames.has('body-cell')" #body-cell="data">
      <slot :name="slotNames.bodyCell" v-bind="bodyCellSlotData(data)"></slot>
    </template>
    <template #body-selection="data">
      <slot :name="slotNames.bodySelection" v-bind="data">
        <q-checkbox v-model="data.selected" />
      </slot>
    </template>
    <template
      v-if="slotNames.hasSome('bottom', 'steady-bottom')"
      #bottom="data"
    >
      <slot :name="slotNames.bottom" v-bind="data"></slot>
      <slot
        :name="slotNames.steadyBottom"
        v-bind="steadyBottomSlotData()"
      ></slot>
    </template>
    <template #header-selection="data">
      <slot :name="slotNames.headerSelection" v-bind="data">
        <q-checkbox v-model="data.selected" :disable="empty" />
      </slot>
    </template>
    <template
      v-if="slotNames.hasSome('no-data', 'steady-bottom')"
      #no-data="data"
    >
      <slot :name="slotNames.noData" v-bind="data"></slot>
      <slot
        :name="slotNames.steadyBottom"
        v-bind="steadyBottomSlotData()"
      ></slot>
    </template>
  </q-table>
</template>
