<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as fn from "@skylib/functions/es/function";
import * as o from "@skylib/functions/es/object";

import type {
  Column,
  Columns,
  ColumnsOrder,
  ColumnWidths,
  HiddenColumns,
  Pagination
} from "../components/Table.extras";
import { genericTable } from "../components/Table.generic";

interface TableItem {
  readonly id: number;
  readonly name: string;
}

type TableItems = readonly TableItem[];

export default defineComponent({
  name: "sample-table",
  components: {
    "generic-table": genericTable<TableItem>()
  },
  setup() {
    const columnsOrder = ref<ColumnsOrder>(new Map());

    const columnWidths = ref<ColumnWidths>(new Map());

    const hiddenColumns = ref<HiddenColumns>(new Set());

    const manageColumns = ref(false);

    const multiselect = ref(false);

    const noData = ref(false);

    const pagination = ref<Pagination>({
      descending: false,
      limit: 10,
      sortBy: "name"
    });

    const resizableColumns = ref(false);

    const selectByCheckbox = ref(false);

    const selectByRowClick = ref(false);

    const shortData = ref(false);

    const sticky = ref(false);

    const width1 = ref(200);

    const width2 = ref(200);

    return {
      columnWidths,
      columnsOrder,
      hiddenColumns,
      manageColumns,
      multiselect,
      noData,
      pageTableColumns: computed<Columns<TableItem>>(() => [
        o.removeUndefinedKeys<Column<TableItem>>({
          align: "left",
          field(row): string {
            return `${row.name}!1!1234567890`;
          },
          label: "Column name 1",
          maxWidth: 300,
          minWidth: 30,
          name: "name1",
          sort(_value1, _value2, row1, row2): number {
            return row1.id - row2.id;
          },
          sortable: true,
          width: width1.value
        }),
        o.removeUndefinedKeys<Column<TableItem>>({
          align: "left",
          field(row): string {
            return `${row.name}!2!1234567890`;
          },
          label: "Column name 2",
          maxWidth: 300,
          minWidth: 30,
          name: "name2",
          width: width2.value
        })
      ]),
      pageTableRows: computed<TableItems>(() => {
        if (noData.value) return [];

        const ids = fn.run(() => {
          if (shortData.value) return a.fromRange(1, 5);

          assert.not.empty(pagination.value.limit);

          return pagination.value.descending ?? false
            ? a.fromRange(1001 - pagination.value.limit, 1000)
            : a.fromRange(1, pagination.value.limit);
        });

        return ids.map(id => {
          return {
            id,
            name: `Item ${id}`
          };
        });
      }),
      pagination,
      resizableColumns,
      selectByCheckbox,
      selectByRowClick,
      selected: ref<TableItems>([]),
      shortData,
      sticky
    };
  }
});
</script>

<template>
  <m-page-layout :class="$style.pageLayout" title="Title">
    <template #fit>
      <generic-table
        v-model:columnWidths="columnWidths"
        v-model:columnsOrder="columnsOrder"
        v-model:hiddenColumns="hiddenColumns"
        v-model:pagination="pagination"
        v-model:selected="selected"
        class="fit"
        :columns="pageTableColumns"
        :manage-columns="manageColumns"
        :multiselect="multiselect"
        :resizable-columns="resizableColumns"
        row-key="id"
        :rows="pageTableRows"
        :select-by-checkbox="selectByCheckbox"
        :select-by-row-click="selectByRowClick"
        :sticky="sticky"
      >
        <template #top>
          <m-buttons-group>
            <m-toggle v-model="manageColumns" label="Manage columns" />
            <m-toggle v-model="multiselect" label="Multi-select" />
            <m-toggle v-model="noData" label="No data" />
            <m-toggle v-model="resizableColumns" label="Resizable columns" />
            <m-toggle v-model="selectByCheckbox" label="Select by checkbox" />
            <m-toggle v-model="selectByRowClick" label="Select by row click" />
            <m-toggle v-model="shortData" label="Short data" />
            <m-toggle v-model="sticky" label="Sticky" />
          </m-buttons-group>
        </template>
        <template
          #steady-bottom="{
            allSelected,
            toggleSelection,
            toggleSelectionDisable
          }"
        >
          <template v-if="multiselect">
            <q-checkbox
              :disable="toggleSelectionDisable"
              :model-value="allSelected"
              @update:model-value="toggleSelection"
            />
            {{ selected.length }} selected
          </template>
          <q-space />
          {{ pageTableRows.length }} out of 1000
        </template>
        <template #body-context="{ row }">
          <m-menu auto-close context-menu>
            <q-list>
              <m-list-item
                :caption="row.name"
                @click="$q.notify('Click row')"
              />
            </q-list>
          </m-menu>
        </template>
        <template #body-cell-context="{ column }">
          <m-menu auto-close context-menu>
            <q-list>
              <m-list-item
                :caption="column.label"
                @click="$q.notify('Click cell')"
              />
            </q-list>
          </m-menu>
        </template>
      </generic-table>
    </template>
  </m-page-layout>
</template>

<style lang="scss" module>
.pageLayout {
  border: 1px solid $grey-5;
}
</style>
