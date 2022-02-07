<script lang="ts">
import type { QTableSlots } from "quasar";
import { computed, defineComponent } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";
import type { Writable } from "@skylib/functions/es/types/core";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import { usePageContentHeight } from "./api/pageContentHeight";
import { isVirtualScrollEvent } from "./extras/QVirtualScroll";
import type {
  Column,
  Columns,
  Field,
  PageTablePropOptions
} from "./PageTable.extras";
import { injectPageTableSettings, isAlign } from "./PageTable.extras";

interface BodyCellData {
  readonly row: unknown;
  readonly value: unknown;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isField: is.Guard<Field<any>> = is.callable;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isColumn: is.Guard<Column<any>> = is.factory(
  is.object.of,
  {
    align: isAlign,
    field: isField,
    label: is.string,
    name: is.string
  },
  {
    sortable: is.true
  }
);

const isColumns = is.factory(is.array.of, isColumn);

export default defineComponent({
  name: "x-page-table",
  props: {
    ...({} as PageTablePropOptions),
    columns: propOptions.required(isColumns),
    extraPageOffset: propOptions(is.stringU),
    limit: propOptions(is.numberU),
    rows: propOptions.required(is.factory(is.array.of, is.unknown)),
    selected: propOptions(is.factory(is.array.of, is.unknown))
  },
  emits: {
    "update:limit": (value: number) => is.number(value),
    "update:selected": (value: readonly unknown[] | undefined) =>
      is.or(value, is.array, is.undefined)
  },
  // eslint-disable-next-line @skylib/no-mutable-signature, @skylib/prefer-readonly
  setup(props: SetupProps<PageTablePropOptions>, { emit, slots }) {
    const settings = injectPageTableSettings();

    return {
      bodyCellSlotData(
        data: Readonly<Parameters<QTableSlots["body-cell"]>[0]>
      ): BodyCellData {
        return data;
      },
      height: usePageContentHeight(() => props.extraPageOffset),
      onScroll(event: unknown): void {
        assert.byGuard(event, isVirtualScrollEvent);

        if (is.not.empty(props.limit) && event.to === props.limit - 1)
          emit("update:limit", props.limit + settings.value.growPageBy);
      },
      passThroughSlots: computed<Array<keyof QTableSlots>>(
        () =>
          Object.keys(o.omit(slots, "body-cell")) as Array<keyof QTableSlots>
      ),
      tableColumns: computed<Writable<Columns<unknown>>>(() =>
        a.clone(props.columns)
      ),
      tableRows: computed<unknown[]>(() => a.clone(props.rows)),
      tableSelected: computed<unknown[] | undefined>(() =>
        props.selected ? a.clone(props.selected) : undefined
      )
    };
  }
});
</script>

<template>
  <q-table
    class="sticky-header-table"
    :columns="tableColumns"
    :rows="tableRows"
    :rows-per-page-options="[0]"
    :selected="tableSelected"
    :style="{
      height
    }"
    virtual-scroll
    :virtual-scroll-item-size="48"
    :virtual-scroll-sticky-size-start="48"
    @update:selected="$emit('update:selected', $event)"
    @virtual-scroll="onScroll"
  >
    <template v-for="name in passThroughSlots" #[name]>
      <slot :name="name"></slot>
    </template>
    <template v-if="$slots['body-cell']" #body-cell="data">
      <slot name="body-cell" v-bind="bodyCellSlotData(data)"></slot>
    </template>
  </q-table>
</template>
