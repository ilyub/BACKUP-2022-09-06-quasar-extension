<script lang="ts">
// eslint-disable-next-line no-warning-comments
// fixme: https://github.com/quasarframework/quasar/issues/12845
import * as _ from "lodash-es";
import type { QTable } from "quasar";
import { QTh } from "quasar";
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
import { genericSortable } from "./Sortable.generic";
import type {
  AllSelectedData,
  Column,
  ColumnOrder,
  Columns,
  Pagination,
  TableOwnProps,
  TableParentProps,
  TableSlots
} from "./Table.extras";
import {
  icons,
  injectTableSettings,
  isColumnOrder,
  isColumnsFactory,
  isPagination,
  lang
} from "./Table.extras";

interface SortMethod {
  (rows: objects): objects;
}

export default defineComponent({
  name: "m-table",
  components: {
    "m-sortable-column": genericSortable<Column>()
  },
  props: {
    ...propsToPropDefinitions<TableParentProps>(),
    columnOrder: propOptions.default(isColumnOrder, new Map()),
    columns: propOptions.default(isColumnsFactory(), []),
    externalSorting: propOptions.boolean(),
    multiselect: propOptions.boolean(),
    pagination: propOptions.default(isPagination, {}),
    rowKey: propOptions(is.stringU),
    rows: propOptions.default(is.objects, []),
    selectByCheckbox: propOptions.boolean(),
    selectByRowClick: propOptions.boolean(),
    selected: propOptions.default(is.objects, [])
  },
  emits: {
    "update:columnOrder"(value: ColumnOrder) {
      return isColumnOrder(value);
    },
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
      QTh,
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
      itemAttrs(item: Column): object {
        return {
          class: {
            "cursor-pointer": item.sortable,
            "m-table__header-cell": true
          },
          onClick(): void {
            assert.not.empty(table.value);
            table.value.sort(item.name);
          }
        };
      },
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
      rowClick(row: object): void {
        if (props.selectByRowClick) {
          assert.not.empty(props.rowKey);
          emit(
            "update:selected",
            a.toggleBy(selected.value, row, props.rowKey)
          );
        }
      },
      selection: computed<"multiple" | "none" | "single">(() => {
        if (props.selectByCheckbox || props.selectByRowClick)
          return props.multiselect ? "multiple" : "single";

        return "none";
      }),
      slotNames: useSlotsNames<TableSlots>()(
        "body",
        "body-cell",
        "body-selection",
        "bottom",
        "header",
        "header-cell",
        "header-selection",
        "no-data",
        "steady-bottom"
      ),
      sortMethod: computed<SortMethod | undefined>(() =>
        props.externalSorting ? fn.identity : undefined
      ),
      table,
      tableColumns: computed<Writable<Columns>>(() =>
        props.columns
          .map((column, index) => {
            return {
              ...column,
              order: props.columnOrder.get(column.name) ?? 1000 + index
            };
          })
          .sort((x, y) => x.order - y.order)
      ),
      tableColumnsUpdate(columns: Columns): void {
        emit(
          "update:columnOrder",
          new Map(columns.map((column, index) => [column.name, index]))
        );
      },
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
    :selection="selection"
    separator="cell"
    :sort-method="sortMethod"
    virtual-scroll
    :virtual-scroll-item-size="48"
    :virtual-scroll-sticky-size-start="48"
    @update:pagination="updatePagination"
    @update:selected="$emit('update:selected', $event)"
    @virtual-scroll="onScroll"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
    <template #header="data">
      <slot :name="slotNames.header" v-bind="data">
        <m-sortable-column
          group="table"
          handle=".m-table__header__wrapper__label"
          :item-attrs="itemAttrs"
          item-key="name"
          :item-tag="QTh"
          :model-value="tableColumns"
          tag="tr"
          @update:model-value="tableColumnsUpdate"
        >
          <template #header>
            <q-th v-if="selectByCheckbox" class="m-table__selection-cell">
              <slot
                :name="slotNames.headerSelection"
                v-bind="{
                  allSelected,
                  allSelectedClick,
                  allSelectedDisable,
                  allSelectedIcon,
                  allSelectedLabel
                }"
              >
                <q-checkbox
                  v-if="multiselect"
                  v-model="data.selected"
                  :disable="empty"
                />
              </slot>
            </q-th>
          </template>
          <template #item="{ item: column }">
            <div
              class="m-table__header__wrapper"
              :style="{
                maxWidth: columnCssMaxWidth(column),
                minWidth: columnCssMinWidth(column),
                width: columnCssWidth(column)
              }"
              @click="
                () => {
                  if (column.sortable) data.sort(column.name);
                }
              "
            >
              <div class="m-table__header__wrapper__left">
                <q-icon
                  v-if="columnShowSortingIcon(column)"
                  :name="columnSortingIcon"
                />
              </div>
              <div class="m-table__header__wrapper__label">
                <slot
                  :name="slotNames.bodyCell"
                  v-bind="{
                    allSelected,
                    allSelectedClick,
                    allSelectedDisable,
                    allSelectedIcon,
                    allSelectedLabel,
                    column
                  }"
                >
                  {{ column.label }}
                </slot>
              </div>
              <div class="m-table__header__wrapper__right">
                <q-icon
                  v-if="columnShowSortingIcon(column)"
                  :name="columnSortingIcon"
                />
              </div>
            </div>
            <m-resizer
              v-if="columnResizable(column)"
              :max="columnMaxWidth(column)"
              :min="columnMinWidth(column)"
              :model-value="columnWidth(column)"
              @update:model-value="columnUpdateWidth(column, $event)"
            />
          </template>
          <template #footer>
            <q-th class="m-table__final-cell" />
          </template>
        </m-sortable-column>
      </slot>
    </template>
    <template #body="data">
      <slot :name="slotNames.body" v-bind="data">
        <q-tr
          :class="{
            'm-table__select-by-row-click': selectByRowClick,
            'selected': data.selected
          }"
          @click="rowClick(data.row)"
        >
          <q-td v-if="selectByCheckbox" class="m-table__selection-cell">
            <slot
              :name="slotNames.bodySelection"
              v-bind="{
                allSelected,
                allSelectedClick,
                allSelectedDisable,
                allSelectedIcon,
                allSelectedLabel,
                row: data.row
              }"
            >
              <q-checkbox v-model="data.selected" />
            </slot>
          </q-td>
          <q-td
            v-for="column in tableColumns"
            :key="column.name"
            class="m-table__body-cell"
          >
            <div
              class="m-table__body-cell__wrapper"
              :style="{
                maxWidth: columnCssMaxWidth(column),
                minWidth: columnCssMinWidth(column),
                width: columnCssWidth(column)
              }"
            >
              <slot
                :name="slotNames.bodyCell"
                v-bind="{
                  allSelected,
                  allSelectedClick,
                  allSelectedDisable,
                  allSelectedIcon,
                  allSelectedLabel,
                  row: data.row,
                  column
                }"
              >
                {{ column.field(data.row) }}
              </slot>
            </div>
          </q-td>
          <q-td class="m-table__final-cell" /> </q-tr
      ></slot>
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
