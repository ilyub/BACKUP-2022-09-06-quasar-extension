<script lang="ts">
import { genericSortable } from "./Sortable.generic";
import { Table } from "./Table.extras";
import {
  directives,
  override,
  parentProps,
  plugins,
  propFactory,
  skipCheck,
  validateEmit,
  validateExpose,
  validateProps
} from "./api";
import { a, as, cast, fn, is, map, o, set } from "@skylib/functions";
import * as _ from "@skylib/lodash-commonjs-es";
import { computed, defineComponent, ref } from "vue";
import type {
  IndexedRecord,
  Writable,
  numberU,
  objects
} from "@skylib/functions";
import type { QDialog, QTable } from "quasar";

const icons = Table.icons;

const lang = Table.lang;

const prop = propFactory<Table.OwnProps>();

interface VirtualScrollDetails {
  readonly direction: "decrease" | "increase";
  readonly from: number;
  readonly index: number;
  readonly to: number;
}

export default defineComponent({
  name: "m-table",
  directives: { debugId: directives.debugId("table") },
  components: { "sortable-columns": genericSortable<Table.Column>() },
  inheritAttrs: false,
  props: {
    ...parentProps<Table.ParentProps>(),
    binaryStateSortOff: prop.boolean("binaryStateSortOff"),
    binaryStateSortOn: prop.boolean("binaryStateSortOn"),
    columnWidths: prop.default("columnWidths", new Map()),
    columns: prop.default("columns", []),
    columnsOrder: prop.default("columnsOrder", new Map()),
    externalSorting: prop.boolean("externalSorting"),
    flatOff: prop.boolean("flatOff"),
    flatOn: prop.boolean("flatOn"),
    headerSeparatorOff: prop.boolean("headerSeparatorOff"),
    headerSeparatorOn: prop.boolean("headerSeparatorOn"),
    hiddenColumns: prop.default("hiddenColumns", new Set()),
    manageColumns: prop.boolean("manageColumns"),
    multiSelect: prop.boolean("multiSelect"),
    pagination: prop.default("pagination", {}),
    resizableColumns: prop.boolean("resizableColumns"),
    rowKey: prop("rowKey"),
    rows: prop.default("rows", []),
    selectByCheckbox: prop.boolean("selectByCheckbox"),
    selectByRowClick: prop.boolean("selectByRowClick"),
    selected: prop.default("selected", []),
    squareOff: prop.boolean("squareOff"),
    squareOn: prop.boolean("squareOn"),
    sticky: prop.boolean("sticky")
  },
  emits: {
    "update:columnWidths": (value: Table.ColumnWidths) => skipCheck(value),
    "update:columnsOrder": (value: Table.ColumnsOrder) => skipCheck(value),
    "update:hiddenColumns": (value: Table.HiddenColumns) => skipCheck(value),
    "update:pagination": (value: Table.PaginationEmit) => skipCheck(value),
    "update:selected": (value: objects) => skipCheck(value)
  },
  setup: (props, { emit, expose }) => {
    const allSelected = computed(() => {
      if (props.rows.length > 0)
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

    const main = ref<QTable>();

    const selected = computed(() =>
      _.intersectionBy(props.selected, props.rows, as.not.empty(props.rowKey))
    );

    const settings = Table.injectSettings();

    const exposed = { main };

    validateEmit<Table.OwnProps>(emit);
    validateExpose<Table.Global>(expose, exposed);
    validateProps<Table.OwnProps>(props);

    return {
      allSelected,
      binaryStateSort: computed(() =>
        override(
          settings.value.binaryStateSort,
          props.binaryStateSortOn,
          props.binaryStateSortOff
        )
      ),
      columnSortingIcon: computed(() =>
        props.pagination.descending ?? false
          ? icons.descending
          : icons.ascending
      ),
      columnSortingIconShow: (column: Table.Column): boolean =>
        column.name === props.pagination.sortBy,
      columnStyle: (column: Table.Column): IndexedRecord<string> =>
        o.removeUndefinedKeys({
          maxWidth: is.not.empty(column.maxWidth)
            ? `${column.maxWidth}px`
            : undefined,
          minWidth: is.not.empty(column.minWidth)
            ? `${column.minWidth}px`
            : undefined,
          width: is.not.empty(column.width)
            ? `${props.columnWidths.get(column.name) ?? column.width}px`
            : undefined
        }),
      columnsManagementRows: computed<Writable<Table.Columns>>(() =>
        props.columns
          .map((column, index) => {
            return {
              ...column,
              order: props.columnsOrder.get(column.name) ?? 1000 + index
            };
          })
          .sort((x, y) => x.order - y.order)
      ),
      columnsManagementShow: ref(false),
      debugDialog: ref<QDialog>(),
      deselectAll: (): void => {
        emit("update:selected", []);
      },
      deselectAllDisable: computed(
        () => props.rows.length === 0 || allSelected.value === false
      ),
      deselectAllIcon: computed(() => icons.deselectAll),
      deselectAllLabel: computed(() => lang.DeselectAll),
      empty: computed(() => props.rows.length === 0),
      flat: computed(() =>
        override(settings.value.flat, props.flatOn, props.flatOff)
      ),
      headerCellClick: (column: Table.Column): void => {
        if (column.sortable ?? false)
          as.not.empty(main.value).sort(column.name);
      },
      headerSeparator: computed(() =>
        override(
          settings.value.headerSeparator,
          props.headerSeparatorOn,
          props.headerSeparatorOff
        )
      ),
      icons,
      lang,
      lk: lang.keys,
      main,
      resizerUpdate: (column: Table.Column, width: number): void => {
        emit(
          "update:columnWidths",
          map.set(props.columnWidths, column.name, width)
        );
      },
      resizerValue: (column: Table.Column): numberU =>
        is.not.empty(column.width)
          ? props.columnWidths.get(column.name) ?? column.width
          : undefined,
      rowClick: (row: object): void => {
        if (props.selectByRowClick)
          emit(
            "update:selected",
            props.multiSelect
              ? a.toggleBy(selected.value, row, as.not.empty(props.rowKey))
              : [row]
          );
      },
      selectAll: (): void => {
        emit("update:selected", props.rows);
      },
      selectAllDisable: computed(
        () => props.rows.length === 0 || allSelected.value === true
      ),
      selectAllIcon: computed(() => icons.selectAll),
      selectAllLabel: computed(() => lang.SelectAll),
      selection: computed(() => {
        if (props.selectByCheckbox || props.selectByRowClick)
          return props.multiSelect ? "multiple" : "single";

        return "none";
      }),
      showFinalCell: computed(() =>
        props.columns.some(column => is.not.empty(column.width))
      ),
      slotNames: plugins.slotNames<Table.Slots>()(
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
      sortMethod: computed(() =>
        props.externalSorting ? fn.identity : undefined
      ),
      sortedColumns: computed(() =>
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
      square: computed(() =>
        override(settings.value.square, props.squareOn, props.squareOff)
      ),
      toggleSelection: (): void => {
        emit("update:selected", allSelected.value === false ? props.rows : []);
      },
      toggleSelectionDisable: computed(() => props.rows.length === 0),
      toggleSelectionIcon: computed(() =>
        allSelected.value === false ? icons.selectAll : icons.deselectAll
      ),
      toggleSelectionLabel: computed(() =>
        allSelected.value === false ? lang.SelectAll : lang.DeselectAll
      ),
      updateColumnsOrder: (columns: Table.Columns): void => {
        emit(
          "update:columnsOrder",
          new Map(columns.map((column, index) => [column.name, index]))
        );
      },
      updateHiddenColumns: (column: Table.Column, show: boolean): void => {
        emit(
          "update:hiddenColumns",
          show
            ? set.delete(props.hiddenColumns, column.name)
            : set.add(props.hiddenColumns, column.name)
        );
      },
      updatePagination: (pagination: Table.PaginationEmit): void => {
        pagination = { ...props.pagination, ...pagination };
        emit("update:pagination", pagination);

        const descending1 = pagination.descending;

        const descending2 = props.pagination.descending ?? false;

        const sortBy1 = pagination.sortBy;

        const sortBy2 = props.pagination.sortBy;

        if (
          descending1 === descending2 &&
          cast.stringU(sortBy1) === cast.stringU(sortBy2)
        ) {
          // Do nothing
        } else as.not.empty(main.value).scrollTo(0, "start");
      },
      virtualScroll: (details: VirtualScrollDetails): void => {
        if (
          is.not.empty(props.pagination.limit) &&
          details.to === props.pagination.limit - 1
        )
          emit("update:pagination", {
            ...props.pagination,
            descending: props.pagination.descending ?? false,
            limit: props.pagination.limit + settings.value.growPageBy,
            page: 1,
            rowsPerPage: 0
          });
      },
      writableRows: computed(() => a.clone(props.rows)),
      writableSelected: computed(() => a.clone(props.selected))
    };
  }
});
</script>

<template>
  <q-table
    v-bind="$attrs"
    ref="main"
    :binary-state-sort="binaryStateSort"
    class="m-table"
    :class="{ 'm-table__sticky': sticky }"
    :columns="sortedColumns"
    :flat="flat"
    :pagination="pagination"
    :row-key="rowKey"
    :rows="writableRows"
    :rows-per-page-options="[0]"
    :selected="writableSelected"
    :selection="selection"
    :sort-method="sortMethod"
    :square="square"
    virtual-scroll
    :virtual-scroll-item-size="48"
    :virtual-scroll-sticky-size-start="48"
    @update:pagination="updatePagination"
    @update:selected="$emit('update:selected', $event)"
    @virtual-scroll="virtualScroll"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #header="data">
      <slot :name="slotNames.header" v-bind="data ?? {}">
        <q-tr>
          <m-menu
            v-if="
              manageColumns ||
              slotNames.has('header-menu-prepend') ||
              slotNames.has('header-menu-append')
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
              <m-menu-item
                :caption="lk.ManageColumns"
                :icon="icons.manageColumns"
                @click="columnsManagementShow = true"
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
          <q-th v-if="selectByCheckbox" class="m-table__selection-cell">
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
                v-if="multiSelect"
                v-model="data.selected"
                v-debug-id="'header-select'"
                :disable="empty"
              />
            </slot>
          </q-th>
          <q-th
            v-for="column in sortedColumns"
            :key="column.name"
            v-debug-id="'header-cell'"
            class="m-table__header-cell"
            :class="{
              'cursor-pointer': column.sortable,
              'm-table__header-cell__separator': headerSeparator
            }"
            @click="headerCellClick(column)"
          >
            <div
              v-debug-id="'header-cell-wrapper'"
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
                  {{ lang.get(column.label) }}
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
              v-debug-id="'resizer'"
              :max="column.maxWidth"
              :min="column.minWidth"
              :model-value="resizerValue(column)"
              @update:model-value="resizerUpdate(column, $event)"
            />
          </q-th>
          <q-th v-if="showFinalCell" class="m-table__final-cell" />
        </q-tr>
      </slot>
    </template>
    <template #body="data">
      <slot :name="slotNames.body" v-bind="data ?? {}">
        <q-tr
          v-debug-id="'body-row'"
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
          <q-td v-if="selectByCheckbox" class="m-table__selection-cell">
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
          </q-td>
          <q-td
            v-for="column in sortedColumns"
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
          </q-td>
          <q-td v-if="showFinalCell" class="m-table__final-cell" />
        </q-tr>
      </slot>
    </template>
    <template
      v-if="slotNames.hasSome('bottom', 'steady-bottom')"
      #bottom="data"
    >
      <slot :name="slotNames.bottom" v-bind="data ?? {}"></slot>
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
      <slot :name="slotNames.noData" v-bind="data ?? {}"></slot>
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
  <q-dialog ref="debugDialog" v-model="columnsManagementShow">
    <m-card class="m-table__columns-management" :title="lk.ManageColumns">
      <m-card-section>
        <q-markup-table
          class="m-table__columns-management__table"
          flat
          separator="horizontal"
        >
          <sortable-columns
            v-debug-id="'dialog-sortable'"
            group="m-table__columns-management"
            item-key="name"
            item-tag="tr"
            :model-value="columnsManagementRows"
            sort
            tag="tbody"
            @update:model-value="updateColumnsOrder"
          >
            <template #item="{ item: column }">
              <q-tr>
                <q-td
                  v-debug-id="'dialog-label'"
                  class="m-table__columns-management__label"
                >
                  {{ lang.get(column.label) }}
                </q-td>
                <q-td class="text-right">
                  <q-checkbox
                    v-debug-id="'dialog-hidden'"
                    :model-value="!hiddenColumns.has(column.name)"
                    @update:model-value="updateHiddenColumns(column, $event)"
                  />
                </q-td>
              </q-tr>
            </template>
          </sortable-columns>
        </q-markup-table>
      </m-card-section>
    </m-card>
  </q-dialog>
</template>
