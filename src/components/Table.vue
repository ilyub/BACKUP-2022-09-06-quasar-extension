<script lang="ts">
// eslint-disable-next-line no-warning-comments
// fixme: https://github.com/quasarframework/quasar/issues/12845
import * as _ from "lodash-es";
import type { QTable } from "quasar";
import { computed, defineComponent, ref } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as fn from "@skylib/functions/es/function";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";
import type {
  numberU,
  objects,
  Writable
} from "@skylib/functions/es/types/core";

import {
  propOptions,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { VirtualScrollDetails } from "./extras/QVirtualScroll";
import type {
  AllSelectedData,
  Column,
  Columns,
  Pagination,
  TableOwnProps,
  TableParentProps,
  TableSlots
} from "./Table.extras";
import {
  icons,
  injectTableSettings,
  isColumnsFactory,
  isPagination,
  lang
} from "./Table.extras";

interface SortMethod {
  (rows: objects): objects;
}

interface RowClick {
  (event: Event, row: unknown, index: number): void;
}

export default defineComponent({
  name: "m-table",
  props: {
    ...propsToPropDefinitions<TableParentProps>(),
    columns: propOptions.default(isColumnsFactory(), []),
    externalSorting: propOptions.boolean(),
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
    validateEmit<TableOwnProps>(emit);
    validateProps<TableOwnProps>(props);

    const allSelected = computed<AllSelectedData["allSelected"]>(() => {
      switch (selected.value.length) {
        case 0:
          return false;

        case props.rows.length:
          return true;

        default:
          return undefined;
      }
    });

    const allSelectedClick: AllSelectedData["allSelectedClick"] = (): void => {
      emit("update:selected", selected.value.length ? [] : props.rows);
    };

    const allSelectedDisable = computed<AllSelectedData["allSelectedDisable"]>(
      () => props.rows.length === 0
    );

    const allSelectedIcon = computed<AllSelectedData["allSelectedIcon"]>(() =>
      allSelected.value === false ? icons.selectAll : icons.deselectAll
    );

    const allSelectedLabel = computed<AllSelectedData["allSelectedLabel"]>(() =>
      allSelected.value === false ? lang.SelectAll : lang.DeselectAll
    );

    const selected = computed<Writable<objects>>(() => {
      assert.not.empty(props.rowKey);

      return _.intersectionBy(props.selected, props.rows, props.rowKey);
    });

    const settings = injectTableSettings();

    const table = ref<QTable | undefined>(undefined);

    return {
      allSelected,
      allSelectedClick,
      allSelectedDisable,
      allSelectedIcon,
      allSelectedLabel,
      columnCssMaxWidth(column: Column): string {
        return is.not.empty(column.maxWidth) ? `${column.maxWidth}px` : "none";
      },
      columnCssMinWidth(column: Column): string {
        return is.not.empty(column.minWidth) ? `${column.minWidth}px` : "0";
      },
      columnCssWidth(column: Column): string {
        return is.not.empty(column.width) ? `${column.width}px` : "auto";
      },
      // eslint-disable-next-line no-warning-comments
      // fixme: Use generic table version
      columnMaxWidth(column: Column): numberU {
        return column.maxWidth;
      },
      // eslint-disable-next-line no-warning-comments
      // fixme: Use generic table version
      columnMinWidth(column: Column): number {
        return column.minWidth ?? 0;
      },
      columnResizable(column: Column): boolean {
        return is.not.empty(column.width);
      },
      columnShowSortingIcon(column: Column): boolean {
        return column.name === props.pagination.sortBy;
      },
      columnSortingIcon: computed<string>(() =>
        props.pagination.descending ?? false
          ? icons.descending
          : icons.ascending
      ),
      columnUpdateWidth(column: Column, newWidth: number): void {
        assert.not.empty(column.updateWidth);
        column.updateWidth(newWidth);
      },
      columnWidth(column: Column): number {
        assert.not.empty(column.width);

        return column.width;
      },
      empty: computed<boolean>(() => props.rows.length === 0),
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
      slotNames: useSlotsNames<TableSlots>()(
        "body-cell",
        "body-selection",
        "bottom",
        "header-cell",
        "header-selection",
        "no-data",
        "steady-bottom"
      ),
      sortMethod: computed<SortMethod | undefined>(() =>
        props.externalSorting ? fn.identity : undefined
      ),
      table,
      tableColumns: computed<Writable<Columns>>(() => [
        ...props.columns,
        {
          align: "left",
          field(): string {
            return "";
          },
          label: "",
          name: "final-cell"
        }
      ]),
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
    class="m-table"
    :columns="tableColumns"
    :pagination="pagination"
    :row-key="rowKey"
    :rows="tableRows"
    :rows-per-page-options="[0]"
    :selected="tableSelected"
    separator="cell"
    :sort-method="sortMethod"
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
    <template #body-cell="data">
      <slot
        :name="slotNames.bodyCell"
        v-bind="{
          ...data,
          allSelected,
          allSelectedClick,
          allSelectedDisable,
          allSelectedIcon,
          allSelectedLabel
        }"
      >
        <q-td
          v-if="data.col.name === 'final-cell'"
          class="m-table__final-cell"
        />
        <q-td v-else class="m-table__body-cell">
          <div
            class="m-table__body-cell__wrapper"
            :style="{
              maxWidth: columnCssMaxWidth(data.col),
              minWidth: columnCssMinWidth(data.col),
              width: columnCssWidth(data.col)
            }"
          >
            {{ data.value }}
          </div>
        </q-td>
      </slot>
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
        v-bind="{
          allSelected,
          allSelectedClick,
          allSelectedDisable,
          allSelectedIcon,
          allSelectedLabel
        }"
      ></slot>
    </template>
    <template #header-cell="data">
      <slot :name="slotNames.headerCell" v-bind="data">
        <q-th
          v-if="data.col.name === 'final-cell'"
          class="m-table__final-cell"
        />
        <q-th v-else class="m-table__header-cell">
          <div
            class="m-table__header-cell__wrapper"
            :style="{
              maxWidth: columnCssMaxWidth(data.col),
              minWidth: columnCssMinWidth(data.col),
              width: columnCssWidth(data.col)
            }"
            @click="data.sort(data.col.name)"
          >
            <div
              v-if="columnShowSortingIcon(data.col)"
              class="m-table__header-cell__wrapper__left"
            >
              <q-icon :name="columnSortingIcon" />
            </div>
            <div class="m-table__header-cell__wrapper__label">
              {{ data.col.label }}
            </div>
            <div
              v-if="columnShowSortingIcon(data.col)"
              class="m-table__header-cell__wrapper__right"
            >
              <q-icon :name="columnSortingIcon" />
            </div>
          </div>
          <m-resizer
            v-if="columnResizable(data.col)"
            :max="columnMaxWidth(data.col)"
            :min="columnMinWidth(data.col)"
            :model-value="columnWidth(data.col)"
            @update:model-value="columnUpdateWidth(data.col, $event)"
          />
        </q-th>
      </slot>
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
        v-bind="{
          allSelected,
          allSelectedClick,
          allSelectedDisable,
          allSelectedIcon,
          allSelectedLabel
        }"
      ></slot>
    </template>
  </q-table>
</template>
