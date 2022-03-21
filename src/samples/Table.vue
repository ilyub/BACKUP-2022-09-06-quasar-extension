<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";

import type { Columns, Pagination } from "../components/Table.extras";
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
    const columnsOrder = ref<ReadonlyMap<string, number>>(new Map());

    const hiddenColumns = ref<ReadonlySet<string>>(new Set());

    const loading = ref(false);

    const noData = ref(false);

    const pagination = ref<Pagination>({
      descending: false,
      limit: 10,
      sortBy: "name"
    });

    const selectByCheckbox = ref(false);

    const selectByRowClick = ref(false);

    const multiselect = ref(false);

    const width1 = ref(200);

    const width2 = ref(200);

    return {
      columnsOrder,
      hiddenColumns,
      loading,
      multiselect,
      noData,
      pageTableColumns: computed<Columns<TableItem>>(() => [
        {
          align: "left",
          field(row): string {
            return `${row.name}!1!1234567890`;
          },
          label: "Name 1",
          maxWidth: 300,
          minWidth: 30,
          name: "name1",
          sort(_value1, _value2, row1, row2): number {
            return row1.id - row2.id;
          },
          sortable: true,
          updateWidth(newWidth): void {
            width1.value = newWidth;
          },
          width: width1.value
        },
        {
          align: "left",
          field(row): string {
            return `${row.name}!2!1234567890`;
          },
          label: "Name 2",
          maxWidth: 300,
          minWidth: 30,
          name: "name2",
          updateWidth(newWidth): void {
            width2.value = newWidth;
          },
          width: width2.value
        }
      ]),
      pageTableRows: computed<TableItems>(() => {
        if (noData.value) return [];

        assert.not.empty(pagination.value.limit);

        const ids =
          pagination.value.descending ?? false
            ? a.fromRange(1001 - pagination.value.limit, 1000)
            : a.fromRange(1, pagination.value.limit);

        return ids.map(id => {
          return {
            id,
            name: `Item ${id}`
          };
        });
      }),
      pagination,
      selectByCheckbox,
      selectByRowClick,
      selected: ref<TableItems>([])
    };
  }
});
</script>

<template>
  <m-page-layout :class="$style.pageLayout" title="Title">
    <template #fit>
      <generic-table
        v-model:columnsOrder="columnsOrder"
        v-model:hiddenColumns="hiddenColumns"
        v-model:pagination="pagination"
        v-model:selected="selected"
        class="fit"
        :columns="pageTableColumns"
        flat
        :loading="loading"
        :multiselect="multiselect"
        row-key="id"
        :rows="pageTableRows"
        :select-by-checkbox="selectByCheckbox"
        :select-by-row-click="selectByRowClick"
      >
        <template #top>
          <m-toggle v-model="loading" label="Loading" />
          <m-toggle v-model="multiselect" label="Multi-select" />
          <m-toggle v-model="noData" label="No data" />
          <m-toggle v-model="selectByCheckbox" label="Select by checkbox" />
          <m-toggle v-model="selectByRowClick" label="Select by row click" />
        </template>
        <template
          #steady-bottom="{ allSelected, allSelectedClick, allSelectedDisable }"
        >
          <template v-if="multiselect">
            <q-checkbox
              :disable="allSelectedDisable"
              :model-value="allSelected"
              @update:model-value="allSelectedClick"
            />
            {{ selected.length }} selected
          </template>
          <q-space />
          {{ pageTableRows.length }} out of 1000
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
