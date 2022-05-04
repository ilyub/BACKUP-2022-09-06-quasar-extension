<script lang="ts">
// eslint-disable-next-line no-warning-comments
// fixme: Use QTh, https://github.com/quasarframework/quasar/issues/12845
import { genericSortable } from "./Sortable.generic";
import {
  icons,
  injectTableSettings,
  isColumnsOrder,
  isColumnWidths,
  isHiddenColumns,
  isPagination,
  lang
} from "./Table.extras";
import {
  prop,
  propsToPropDefinitions,
  validateEmit,
  validateProps,
  useSlotsNames
} from "./api";
import { a, assert, fn, is, map, o, set } from "@skylib/functions";
import * as _ from "@skylib/lodash-commonjs-es";
import { computed, defineComponent, ref } from "vue";
import type {
  Column,
  Columns,
  ColumnsOrder,
  ColumnWidths,
  HiddenColumns,
  Pagination,
  TableOwnProps,
  TableParentProps,
  TableSlots
} from "./Table.extras";
import type { QVirtualScroll } from "./extras";
import type {
  booleanU,
  IndexedObject,
  numberU,
  objects,
  Writable
} from "@skylib/functions";
import type { QDialog, QTable } from "quasar";

export default defineComponent({
  name: "m-table",
  components: { "m-sortable-column": genericSortable<Column>() },
  inheritAttrs: false,
  props: {
    ...propsToPropDefinitions<TableParentProps>(),
    binaryStateSortOff: prop.boolean(),
    binaryStateSortOn: prop.boolean(),
    columnWidths: prop.default<ColumnWidths>(new Map()),
    columns: prop.default<Columns>([]),
    columnsOrder: prop.default<ColumnsOrder>(new Map()),
    externalSorting: prop.boolean(),
    flatOff: prop.boolean(),
    flatOn: prop.boolean(),
    headerSeparatorOff: prop.boolean(),
    headerSeparatorOn: prop.boolean(),
    hiddenColumns: prop.default<HiddenColumns>(new Set()),
    manageColumns: prop.boolean(),
    multiselect: prop.boolean(),
    pagination: prop.default<Pagination>({}),
    resizableColumns: prop.boolean(),
    rowKey: prop<string>(),
    rows: prop.default<objects>([]),
    selectByCheckbox: prop.boolean(),
    selectByRowClick: prop.boolean(),
    selected: prop.default<objects>([]),
    squareOff: prop.boolean(),
    squareOn: prop.boolean(),
    sticky: prop.boolean()
  },
  emits: {
    "update:columnWidths": (value: ColumnWidths) => isColumnWidths(value),
    "update:columnsOrder": (value: ColumnsOrder) => isColumnsOrder(value),
    "update:hiddenColumns": (value: HiddenColumns) => isHiddenColumns(value),
    "update:pagination": (value: Pagination) => isPagination(value),
    "update:selected": (value: objects) => is.array.of(value, is.object)
  },
  setup(props, { emit }) {
    validateEmit<TableOwnProps>(emit);
    validateProps<TableOwnProps>(props);

    const allSelected = computed<booleanU>(() => {
      if (props.rows.length)
        switch (selected.value.length) {
          case 0:
            return false;

          case props.rows.length:
            return true;

          default:
            return undefined;
        }

      return undefined;
    });

    const selected = computed<Writable<objects>>(() => {
      assert.not.empty(props.rowKey);

      return _.intersectionBy(props.selected, props.rows, props.rowKey);
    });

    const settings = injectTableSettings();

    const main = ref<QTable | undefined>(undefined);

    const dialog = ref<QDialog | undefined>(undefined);

    return {
      allSelected,
      binaryStateSort: computed<boolean>(() =>
        settings.value.binaryStateSort
          ? !props.binaryStateSortOff
          : props.binaryStateSortOn
      ),
      columnSortingIcon: computed<string>(() =>
        props.pagination.descending ?? false
          ? icons.descending
          : icons.ascending
      ),
      columnSortingIconShow(column: Column): boolean {
        return column.name === props.pagination.sortBy;
      },
      columnStyle(column: Column): IndexedObject<string> {
        return o.removeUndefinedKeys({
          maxWidth: is.not.empty(column.maxWidth)
            ? `${column.maxWidth}px`
            : undefined,
          minWidth: is.not.empty(column.minWidth)
            ? `${column.minWidth}px`
            : undefined,
          width: is.not.empty(column.width)
            ? `${props.columnWidths.get(column.name) ?? column.width}px`
            : undefined
        });
      },
      deselectAll(): void {
        emit("update:selected", []);
      },
      deselectAllDisable: computed<boolean>(
        () => props.rows.length === 0 || allSelected.value === false
      ),
      deselectAllIcon: computed<string>(() => icons.deselectAll),
      deselectAllLabel: computed<string>(() => lang.DeselectAll),
      dialog,
      empty: computed<boolean>(() => props.rows.length === 0),
      finalCell: computed<boolean>(() =>
        props.columns.some(column => is.not.empty(column.width))
      ),
      flat: computed<boolean>(() =>
        settings.value.flat ? !props.flatOff : props.flatOn
      ),
      headerSeparator: computed<boolean>(() =>
        settings.value.headerSeparator
          ? !props.headerSeparatorOff
          : props.headerSeparatorOn
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
      onScroll(details: QVirtualScroll.VirtualScrollDetails): void {
        if (
          is.not.empty(props.pagination.limit) &&
          details.to === props.pagination.limit - 1
        )
          emit("update:pagination", {
            ...props.pagination,
            limit: props.pagination.limit + settings.value.growPageBy
          });
      },
      resizerUpdateValue(column: Column, width: number): void {
        emit(
          "update:columnWidths",
          map.set(props.columnWidths, column.name, width)
        );
      },
      resizerValue(column: Column): numberU {
        return is.not.empty(column.width)
          ? props.columnWidths.get(column.name) ?? column.width
          : undefined;
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
      selectAll(): void {
        emit("update:selected", props.rows);
      },
      selectAllDisable: computed<boolean>(
        () => props.rows.length === 0 || allSelected.value === true
      ),
      selectAllIcon: computed<string>(() => icons.selectAll),
      selectAllLabel: computed<string>(() => lang.SelectAll),
      selection: computed<"multiple" | "none" | "single">(() => {
        if (props.selectByCheckbox || props.selectByRowClick)
          return props.multiselect ? "multiple" : "single";

        return "none";
      }),
      slotNames: useSlotsNames<TableSlots>()(
        "body",
        "body-cell",
        "body-cell-context",
        "body-context",
        "body-selection",
        "bottom",
        "header",
        "header-cell",
        "header-menu-append",
        "header-menu-prepend",
        "header-selection",
        "no-data",
        "steady-bottom"
      ),
      sortMethod: computed<SortMethod | undefined>(() =>
        props.externalSorting ? fn.identity : undefined
      ),
      square: computed<boolean>(() =>
        settings.value.square ? !props.squareOff : props.squareOn
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
      tableRows: computed<Writable<objects>>(() => a.clone(props.rows)),
      tableSelected: computed<Writable<objects>>(() => a.clone(props.selected)),
      toggleSelection(): void {
        emit("update:selected", allSelected.value === false ? props.rows : []);
      },
      toggleSelectionDisable: computed<boolean>(() => props.rows.length === 0),
      toggleSelectionIcon: computed<string>(() =>
        allSelected.value === false ? icons.selectAll : icons.deselectAll
      ),
      toggleSelectionLabel: computed<string>(() =>
        allSelected.value === false ? lang.SelectAll : lang.DeselectAll
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

interface SortMethod {
  (rows: objects): objects;
}
</script>

<template>
  <q-table
    v-bind="$attrs"
    ref="main"
    :binary-state-sort="binaryStateSort"
    class="m-table"
    :class="{
      'm-table__sticky': sticky
    }"
    :columns="tableColumns"
    :flat="flat"
    :pagination="pagination"
    :row-key="rowKey"
    :rows="tableRows"
    :rows-per-page-options="[0]"
    :selected="tableSelected"
    :selection="selection"
    :sort-method="sortMethod"
    :square="square"
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
        <tr>
          <m-menu
            v-if="
              manageColumns ||
              slotNames.has('header-menu-append') ||
              slotNames.has('header-menu-prepend')
            "
            auto-close
            context-menu
          >
            <q-list>
              <slot
                :all-selected="allSelected"
                :deselect-all="deselectAll"
                :deselect-all-disable="deselectAllDisable"
                :deselect-all-icon="deselectAllIcon"
                :deselect-all-label="deselectAllLabel"
                :name="slotNames.headerMenuPrepend"
                :select-all="selectAll"
                :select-all-disable="selectAllDisable"
                :select-all-icon="selectAllIcon"
                :select-all-label="selectAllLabel"
                :toggle-selection="toggleSelection"
                :toggle-selection-disable="toggleSelectionDisable"
                :toggle-selection-icon="toggleSelectionIcon"
                :toggle-selection-label="toggleSelectionLabel"
              ></slot>
              <m-list-item
                :caption="lang.ManageColumns"
                :icon="icons.manageColumns"
                @click="manageColumnsShow = true"
              />
              <slot
                :all-selected="allSelected"
                :deselect-all="deselectAll"
                :deselect-all-disable="deselectAllDisable"
                :deselect-all-icon="deselectAllIcon"
                :deselect-all-label="deselectAllLabel"
                :name="slotNames.headerMenuAppend"
                :select-all="selectAll"
                :select-all-disable="selectAllDisable"
                :select-all-icon="selectAllIcon"
                :select-all-label="selectAllLabel"
                :toggle-selection="toggleSelection"
                :toggle-selection-disable="toggleSelectionDisable"
                :toggle-selection-icon="toggleSelectionIcon"
                :toggle-selection-label="toggleSelectionLabel"
              ></slot>
            </q-list>
          </m-menu>
          <th v-if="selectByCheckbox" class="m-table__selection-cell">
            <slot
              :all-selected="allSelected"
              :deselect-all="deselectAll"
              :deselect-all-disable="deselectAllDisable"
              :deselect-all-icon="deselectAllIcon"
              :deselect-all-label="deselectAllLabel"
              :name="slotNames.headerSelection"
              :select-all="selectAll"
              :select-all-disable="selectAllDisable"
              :select-all-icon="selectAllIcon"
              :select-all-label="selectAllLabel"
              :toggle-selection="toggleSelection"
              :toggle-selection-disable="toggleSelectionDisable"
              :toggle-selection-icon="toggleSelectionIcon"
              :toggle-selection-label="toggleSelectionLabel"
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
              'm-table__header-cell__separator': headerSeparator
            }"
            @click="tableColumnsItemClick(column)"
          >
            <div
              class="m-table__header-cell__wrapper"
              :style="columnStyle(column)"
            >
              <div class="m-table__header-cell__left">
                <q-icon
                  v-if="columnSortingIconShow(column)"
                  :name="columnSortingIcon"
                />
              </div>
              <div class="m-table__header-cell__label">
                <slot
                  :all-selected="allSelected"
                  :column="column"
                  :deselect-all="deselectAll"
                  :deselect-all-disable="deselectAllDisable"
                  :deselect-all-icon="deselectAllIcon"
                  :deselect-all-label="deselectAllLabel"
                  :name="slotNames.headerCell"
                  :select-all="selectAll"
                  :select-all-disable="selectAllDisable"
                  :select-all-icon="selectAllIcon"
                  :select-all-label="selectAllLabel"
                  :toggle-selection="toggleSelection"
                  :toggle-selection-disable="toggleSelectionDisable"
                  :toggle-selection-icon="toggleSelectionIcon"
                  :toggle-selection-label="toggleSelectionLabel"
                >
                  {{ column.label }}
                </slot>
              </div>
              <div class="m-table__header-cell__right">
                <q-icon
                  v-if="columnSortingIconShow(column)"
                  :name="columnSortingIcon"
                />
              </div>
            </div>
            <m-resizer
              v-if="resizableColumns"
              class="m-table__header-cell__resizer"
              :max="column.maxWidth"
              :min="column.minWidth"
              :model-value="resizerValue(column)"
              @update:model-value="resizerUpdateValue(column, $event)"
            />
          </th>
          <th v-if="finalCell" class="m-table__final-cell"></th>
        </tr>
      </slot>
    </template>
    <template #body="data">
      <slot :name="slotNames.body" v-bind="data">
        <tr
          :class="{
            'm-table__select-by-row-click': selectByRowClick,
            'selected': data.selected
          }"
          @click="rowClick(data.row)"
        >
          <slot
            :all-selected="allSelected"
            :deselect-all="deselectAll"
            :deselect-all-disable="deselectAllDisable"
            :deselect-all-icon="deselectAllIcon"
            :deselect-all-label="deselectAllLabel"
            :name="slotNames.bodyContext"
            :row="data.row"
            :select-all="selectAll"
            :select-all-disable="selectAllDisable"
            :select-all-icon="selectAllIcon"
            :select-all-label="selectAllLabel"
            :toggle-selection="toggleSelection"
            :toggle-selection-disable="toggleSelectionDisable"
            :toggle-selection-icon="toggleSelectionIcon"
            :toggle-selection-label="toggleSelectionLabel"
          ></slot>
          <td v-if="selectByCheckbox" class="m-table__selection-cell">
            <slot
              :all-selected="allSelected"
              :deselect-all="deselectAll"
              :deselect-all-disable="deselectAllDisable"
              :deselect-all-icon="deselectAllIcon"
              :deselect-all-label="deselectAllLabel"
              :name="slotNames.bodySelection"
              :row="data.row"
              :select-all="selectAll"
              :select-all-disable="selectAllDisable"
              :select-all-icon="selectAllIcon"
              :select-all-label="selectAllLabel"
              :toggle-selection="toggleSelection"
              :toggle-selection-disable="toggleSelectionDisable"
              :toggle-selection-icon="toggleSelectionIcon"
              :toggle-selection-label="toggleSelectionLabel"
            >
              <q-checkbox v-model="data.selected" />
            </slot>
          </td>
          <td
            v-for="column in tableColumns"
            :key="column.name"
            class="m-table__body-cell"
          >
            <slot
              :all-selected="allSelected"
              :column="column"
              :deselect-all="deselectAll"
              :deselect-all-disable="deselectAllDisable"
              :deselect-all-icon="deselectAllIcon"
              :deselect-all-label="deselectAllLabel"
              :name="slotNames.bodyCellContext"
              :row="data.row"
              :select-all="selectAll"
              :select-all-disable="selectAllDisable"
              :select-all-icon="selectAllIcon"
              :select-all-label="selectAllLabel"
              :toggle-selection="toggleSelection"
              :toggle-selection-disable="toggleSelectionDisable"
              :toggle-selection-icon="toggleSelectionIcon"
              :toggle-selection-label="toggleSelectionLabel"
            ></slot>
            <div
              class="m-table__body-cell__wrapper"
              :style="columnStyle(column)"
            >
              <slot
                :all-selected="allSelected"
                :column="column"
                :deselect-all="deselectAll"
                :deselect-all-disable="deselectAllDisable"
                :deselect-all-icon="deselectAllIcon"
                :deselect-all-label="deselectAllLabel"
                :name="slotNames.bodyCell"
                :row="data.row"
                :select-all="selectAll"
                :select-all-disable="selectAllDisable"
                :select-all-icon="selectAllIcon"
                :select-all-label="selectAllLabel"
                :toggle-selection="toggleSelection"
                :toggle-selection-disable="toggleSelectionDisable"
                :toggle-selection-icon="toggleSelectionIcon"
                :toggle-selection-label="toggleSelectionLabel"
              >
                {{ column.field(data.row) }}
              </slot>
            </div>
          </td>
          <td v-if="finalCell" class="m-table__final-cell"></td>
        </tr>
      </slot>
    </template>
    <template
      v-if="slotNames.hasSome('bottom', 'steady-bottom')"
      #bottom="data"
    >
      <slot :name="slotNames.bottom" v-bind="data"></slot>
      <slot
        :all-selected="allSelected"
        :deselect-all="deselectAll"
        :deselect-all-disable="deselectAllDisable"
        :deselect-all-icon="deselectAllIcon"
        :deselect-all-label="deselectAllLabel"
        :name="slotNames.steadyBottom"
        :select-all="selectAll"
        :select-all-disable="selectAllDisable"
        :select-all-icon="selectAllIcon"
        :select-all-label="selectAllLabel"
        :toggle-selection="toggleSelection"
        :toggle-selection-disable="toggleSelectionDisable"
        :toggle-selection-icon="toggleSelectionIcon"
        :toggle-selection-label="toggleSelectionLabel"
      ></slot>
    </template>
    <template
      v-if="slotNames.hasSome('no-data', 'steady-bottom')"
      #no-data="data"
    >
      <slot :name="slotNames.noData" v-bind="data"></slot>
      <slot
        :all-selected="allSelected"
        :deselect-all="deselectAll"
        :deselect-all-disable="deselectAllDisable"
        :deselect-all-icon="deselectAllIcon"
        :deselect-all-label="deselectAllLabel"
        :name="slotNames.steadyBottom"
        :select-all="selectAll"
        :select-all-disable="selectAllDisable"
        :select-all-icon="selectAllIcon"
        :select-all-label="selectAllLabel"
        :toggle-selection="toggleSelection"
        :toggle-selection-disable="toggleSelectionDisable"
        :toggle-selection-icon="toggleSelectionIcon"
        :toggle-selection-label="toggleSelectionLabel"
      ></slot>
    </template>
  </q-table>
  <q-dialog ref="dialog" v-model="manageColumnsShow">
    <m-card class="m-table__dialog" :title="lang.ManageColumns">
      <m-card-section>
        <q-markup-table
          class="m-table__dialog__table"
          flat
          separator="horizontal"
        >
          <m-sortable-column
            class="m-table__dialog__sortable"
            group="m-table__column-management"
            item-key="name"
            item-tag="tr"
            :model-value="manageColumnsRows"
            sort
            tag="tbody"
            @update:model-value="updateColumnsOrder"
          >
            <template #item="{ item: column }">
              <tr>
                <td class="m-table__dialog__label">
                  {{ column.label }}
                </td>
                <td class="text-right">
                  <q-checkbox
                    class="m-table__dialog__hidden-column"
                    :model-value="!hiddenColumns.has(column.name)"
                    @update:model-value="updateHiddenColumns(column, $event)"
                  />
                </td>
              </tr>
            </template>
          </m-sortable-column>
        </q-markup-table>
      </m-card-section>
      <m-card-actions />
    </m-card>
  </q-dialog>
</template>
