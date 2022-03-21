<script lang="ts">
// eslint-disable-next-line no-warning-comments
// fixme: Use QTh, https://github.com/quasarframework/quasar/issues/12845
import * as _ from "lodash-es";
import type { QDialog, QTable } from "quasar";
import { computed, defineComponent, ref } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as fn from "@skylib/functions/es/function";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";
import * as set from "@skylib/functions/es/set";
import type {
  objects,
  ReadonlyIndexedObject,
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
  Columns,
  ColumnsOrder,
  HiddenColumns,
  Pagination,
  TableOwnProps,
  TableParentProps,
  TableSlots
} from "./Table.extras";
import {
  icons,
  injectTableSettings,
  isColumnsFactory,
  isColumnsOrder,
  isHiddenColumns,
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
  inheritAttrs: false,
  props: {
    ...propsToPropDefinitions<TableParentProps>(),
    binaryStateSort: propOptions.booleanU(),
    columns: propOptions.default(isColumnsFactory(), []),
    columnsOrder: propOptions.default(isColumnsOrder, new Map()),
    externalSorting: propOptions.boolean(),
    flat: propOptions.booleanU(),
    headerSeparator: propOptions.boolean(),
    hiddenColumns: propOptions.default(isHiddenColumns, new Set()),
    manageColumns: propOptions.boolean(),
    multiselect: propOptions.boolean(),
    pagination: propOptions.default(isPagination, {}),
    rowKey: propOptions(is.stringU),
    rows: propOptions.default(is.objects, []),
    selectByCheckbox: propOptions.boolean(),
    selectByRowClick: propOptions.boolean(),
    selected: propOptions.default(is.objects, []),
    square: propOptions.booleanU()
  },
  emits: {
    "update:columnsOrder"(value: ColumnsOrder) {
      return isColumnsOrder(value);
    },
    "update:hiddenColumns"(value: HiddenColumns) {
      return isHiddenColumns(value);
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

    const main = ref<QTable | undefined>(undefined);

    const dialog = ref<QDialog | undefined>(undefined);

    return {
      allSelected,
      allSelectedClick,
      allSelectedDisable,
      allSelectedIcon,
      allSelectedLabel,
      columnSortingIcon: computed<string>(() =>
        props.pagination.descending ?? false
          ? icons.descending
          : icons.ascending
      ),
      columnSortingIconShow(column: Column): boolean {
        return column.name === props.pagination.sortBy;
      },
      columnStyle(column: Column): ReadonlyIndexedObject<string> {
        return o.removeUndefinedKeys({
          maxWidth: is.not.empty(column.maxWidth)
            ? `${column.maxWidth}px`
            : undefined,
          minWidth: is.not.empty(column.minWidth)
            ? `${column.minWidth}px`
            : undefined,
          width: is.not.empty(column.width) ? `${column.width}px` : undefined
        });
      },
      dialog,
      empty: computed<boolean>(() => props.rows.length === 0),
      finalCell: computed<boolean>(() =>
        props.columns.some(column => is.not.empty(column.width))
      ),
      icons,
      lang,
      main,
      manageColumnsRows: computed<Writable<Columns>>(() =>
        props.columns
          .map((column, index) => {
            return {
              ...column,
              order: props.columnsOrder.get(column.name) ?? 1000 + index
            };
          })
          .sort((x, y) => x.order - y.order)
      ),
      manageColumnsShow: ref(false),
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
      settings,
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
      tableColumns: computed<Writable<Columns>>(() =>
        props.columns
          .filter(column => !props.hiddenColumns.has(column.name))
          .map((column, index) => {
            return {
              ...column,
              order: props.columnsOrder.get(column.name) ?? 1000 + index
            };
          })
          .sort((x, y) => x.order - y.order)
      ),
      tableColumnsItemClick(column: Column): void {
        if (column.sortable) {
          assert.not.empty(main.value);
          main.value.sort(column.name);
        }
      },
      tableRows: computed<Writable<objects>>(() => o.unfreeze(props.rows)),
      tableSelected: computed<Writable<objects>>(() =>
        o.unfreeze(props.selected)
      ),
      updateColumnsOrder(columns: Columns): void {
        emit(
          "update:columnsOrder",
          new Map(columns.map((column, index) => [column.name, index]))
        );
      },
      updateHiddenColumns(column: Column, show: boolean): void {
        emit(
          "update:hiddenColumns",
          show
            ? set.delete(props.hiddenColumns, column.name)
            : set.add(props.hiddenColumns, column.name)
        );
      },
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

        if (descending1 === descending2 && sortBy1 === sortBy2) {
          // Do nothing
        } else {
          assert.not.empty(main.value);
          main.value.scrollTo(0, "start");
        }
      }
    };
  }
});
</script>

<template>
  <q-table
    v-bind="$attrs"
    ref="main"
    :binary-state-sort="binaryStateSort ?? settings.binaryStateSort"
    class="m-table"
    :columns="tableColumns"
    :flat="flat ?? settings.flat"
    :pagination="pagination"
    :row-key="rowKey"
    :rows="tableRows"
    :rows-per-page-options="[0]"
    :selected="tableSelected"
    :selection="selection"
    :sort-method="sortMethod"
    :square="square ?? settings.square"
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
        <q-tr>
          <m-menu v-if="manageColumns" auto-close context-menu>
            <q-list>
              <m-list-item
                :caption="lang.ManageColumns"
                :icon="icons.manageColumns"
                @click="manageColumnsShow = true"
              />
            </q-list>
          </m-menu>
          <th v-if="selectByCheckbox" class="m-table__selection-cell">
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
          </th>
          <th
            v-for="column in tableColumns"
            :key="column.name"
            class="m-table__header-cell"
            :class="{
              'cursor-pointer': column.sortable,
              'm-table__header-cell-separator': headerSeparator
            }"
            @click="tableColumnsItemClick(column)"
          >
            <div class="m-table__header__wrapper" :style="columnStyle(column)">
              <div class="m-table__header__wrapper__left">
                <q-icon
                  v-if="columnSortingIconShow(column)"
                  :name="columnSortingIcon"
                />
              </div>
              <div class="m-table__header__wrapper__label">
                <slot
                  :name="slotNames.headerCell"
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
                  v-if="columnSortingIconShow(column)"
                  :name="columnSortingIcon"
                />
              </div>
            </div>
            <m-resizer
              :max="column.maxWidth"
              :min="column.minWidth"
              :model-value="column.width"
              @update:model-value="column.updateWidth?.($event)"
            />
          </th>
          <th v-if="finalCell" class="m-table__final-cell"></th>
        </q-tr>
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
              :style="columnStyle(column)"
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
          <q-td v-if="finalCell" class="m-table__final-cell" />
        </q-tr>
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
  <q-dialog ref="dialog" v-model="manageColumnsShow">
    <m-card class="m-table__dialog" :title="lang.ManageColumns">
      <m-card-section>
        <q-markup-table
          :class="$style.manageColumnsTable"
          flat
          separator="horizontal"
        >
          <m-sortable-column
            class="m-table__dialog__sortable"
            group="m-table__column-management"
            item-key="name"
            item-tag="q-tr"
            :model-value="manageColumnsRows"
            sort
            tag="tbody"
            @update:model-value="updateColumnsOrder"
          >
            <template #item="{ item: column }">
              <q-tr>
                <q-td :class="$style.manageColumnsLabel">
                  {{ column.label }}
                </q-td>
                <q-td class="text-right">
                  <q-checkbox
                    class="m-table__dialog__hidden-column"
                    :model-value="!hiddenColumns.has(column.name)"
                    @update:model-value="updateHiddenColumns(column, $event)"
                  />
                </q-td>
              </q-tr>
            </template>
          </m-sortable-column>
        </q-markup-table>
      </m-card-section>
      <m-card-actions />
    </m-card>
  </q-dialog>
</template>

<style lang="scss" module>
.manageColumnsTable {
  overflow: hidden;
}

.manageColumnsLabel {
  min-width: 300px;
}
</style>
