<script lang="ts">
import { generic } from "..";
import { Table } from "./Table.extras";
import { lang } from "@skylib/facades";
import { a, assert, evaluate } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { extras } from "..";

interface ColumnWidths extends extras.Table.ColumnWidths {}

type Columns = extras.Table.Columns<Item>;

interface ColumnsOrder extends extras.Table.ColumnsOrder {}

interface HiddenColumns extends extras.Table.HiddenColumns {}

interface Item {
  readonly id: number;
  readonly name: lang.Key;
}

type Items = readonly Item[];

interface PaginationProp extends extras.Table.PaginationProp {}

export default defineComponent({
  name: "sample-table",
  components: { "m-table__items": generic.Table<Item>() },
  setup: () => {
    const columnWidths = ref<ColumnWidths>(new Map());

    const columnsOrder = ref<ColumnsOrder>(new Map());

    const hiddenColumns = ref<HiddenColumns>(new Set());

    const manageColumns = ref(false);

    const multiSelect = ref(false);

    const noData = ref(false);

    const pagination = ref<PaginationProp>({
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
      columns: computed<Columns>(() => [
        {
          align: "left",
          field: (row): string => `${row.name}!1!1234567890`,
          label: Table.lang.keys.Column1,
          maxWidth: 300,
          minWidth: 30,
          name: "name1",
          sort: (_value1, _value2, row1, row2): number => row1.id - row2.id,
          sortable: true,
          width: width1.value
        },
        {
          align: "left",
          field: (row): string => `${row.name}!2!1234567890`,
          label: Table.lang.keys.Column2,
          maxWidth: 300,
          minWidth: 30,
          name: "name2",
          width: width2.value
        }
      ]),
      columnsOrder,
      hiddenColumns,
      lang: Table.lang,
      lk: Table.lang.keys,
      manageColumns,
      multiSelect,
      noData,
      pagination,
      resizableColumns,
      rows: computed<Items>(() => {
        if (noData.value) return [];

        const ids = evaluate(() => {
          if (shortData.value) return a.fromRange(1, 5);

          assert.not.empty(pagination.value.limit);

          return pagination.value.descending ?? false
            ? a.fromRange(1001 - pagination.value.limit, 1000)
            : a.fromRange(1, pagination.value.limit);
        });

        return ids.map(id => {
          return { id, name: lang.plain(`Item ${id}`) };
        });
      }),
      selectByCheckbox,
      selectByRowClick,
      selected: ref<Items>([]),
      shortData,
      sticky,
      total: computed(() => {
        if (noData.value) return 0;

        if (shortData.value) return 5;

        return 1000;
      })
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-page-layout :class="$style['page-layout']" :title="lk.Title">
      <template #fit>
        <m-table__items
          v-model:columnWidths="columnWidths"
          v-model:columnsOrder="columnsOrder"
          v-model:hiddenColumns="hiddenColumns"
          v-model:pagination="pagination"
          v-model:selected="selected"
          class="fit"
          :columns="columns"
          :manage-columns="manageColumns"
          :multi-select="multiSelect"
          :resizable-columns="resizableColumns"
          row-key="id"
          :rows="rows"
          :select-by-checkbox="selectByCheckbox"
          :select-by-row-click="selectByRowClick"
          :sticky="sticky"
        >
          <template #top>
            <m-buttons-group>
              <m-toggle v-model="manageColumns" :label="lk.ManageColumns" />
              <m-toggle v-model="multiSelect" :label="lk.MultiSelect" />
              <m-toggle v-model="noData" :label="lk.NoData" />
              <m-toggle
                v-model="resizableColumns"
                :label="lk.ResizableColumns"
              />
              <m-toggle
                v-model="selectByCheckbox"
                :label="lk.SelectByCheckbox"
              />
              <m-toggle
                v-model="selectByRowClick"
                :label="lk.SelectByRowClick"
              />
              <m-toggle v-model="shortData" :label="lk.ShortData" />
              <m-toggle v-model="sticky" :label="lk.Sticky" />
            </m-buttons-group>
          </template>
          <template #body-context="{ row }">
            <m-menu auto-close context-menu>
              <q-list>
                <m-menu-item :caption="row.name" @click="$q.notify(row.name)" />
              </q-list>
            </m-menu>
          </template>
          <template #body-cell-context="{ column, row }">
            <m-menu auto-close context-menu>
              <q-list>
                <m-menu-item
                  :caption="column.label"
                  @click="$q.notify(column.field(row))"
                />
              </q-list>
            </m-menu>
          </template>
          <template
            #steady-bottom="{
              allSelected,
              toggleSelection,
              toggleSelectionDisable
            }"
          >
            <template v-if="multiSelect">
              <q-checkbox
                :disable="toggleSelectionDisable"
                :model-value="allSelected"
                @update:model-value="toggleSelection"
              />
              {{ selected.length }} {{ lang.selected }}
            </template>
            <q-space />
            {{ rows.length }} {{ lang.outOf }} {{ total }}
          </template>
        </m-table__items>
      </template>
    </m-page-layout>
  </m-page-section>
</template>

<style lang="scss" module>
.page-layout {
  border: 1px solid $grey-5;
}
</style>
