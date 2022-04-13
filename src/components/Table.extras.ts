import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { Lang } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";
import * as is from "@skylib/functions/es/guards";
import { createValidationObject } from "@skylib/functions/es/helpers";
import * as json from "@skylib/functions/es/json";
import type {
  booleanU,
  objects,
  stringU
} from "@skylib/functions/es/types/core";
import type { QTableProps, QTableSlots } from "quasar";
import { computed, ref } from "vue";
import type { ComputedRef, Ref, VNode } from "vue";
import type { GlobalComponent } from "./api";
import { createInjectable } from "./api";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends ModuleIcons {}
    }

    namespace lang {
      interface Word extends ModuleWord {}
    }
  }
}

export const isColumnsOrder = is.factory(is.map.of, is.string, is.number);

export const isColumnWidths = is.factory(is.map.of, is.string, is.number);

export const isHiddenColumns = is.factory(is.set.of, is.string);

export const AlignVO = createValidationObject<Align>({
  center: "center",
  left: "left",
  right: "right"
});

export const isAlign = is.factory(is.enumeration, AlignVO);

export const isPagination = is.object.factory<Pagination>(
  {},
  {
    descending: is.boolean,
    limit: is.number,
    page: is.number,
    rowsNumber: is.number,
    rowsPerPage: is.number,
    sortBy: is.string
  }
);

export const {
  inject: injectTableSettings,
  provide: provideTableSettings,
  test: testTableSettings
} = createInjectable<TableSettings>(() => {
  return {
    binaryStateSort: false,
    flat: false,
    growPageBy: 10,
    headerSeparator: false,
    square: false
  };
});

export const icons: Icons<keyof ModuleIcons> = baseIcons;

export const lang: Lang<keyof ModuleWord, never> = baseLang;

export const isTableState = is.object.factory<TableState>(
  {
    columnWidths: isColumnWidths,
    columnsOrder: isColumnsOrder,
    descending: is.boolean,
    hiddenColumns: isHiddenColumns,
    sortBy: is.string
  },
  {}
);

export const isTableStateU = is.or.factory(isTableState, is.undefined);

export type Align = "center" | "left" | "right";

export interface BodyCellContextSlotData<T extends object = object>
  extends MultiSelectData {
  readonly column: Column<T>;
  readonly row: T;
}

export interface BodyCellSlotData<T extends object = object>
  extends MultiSelectData {
  readonly column: Column<T>;
  readonly row: T;
}

export interface BodyContextSlotData<T extends object = object>
  extends MultiSelectData {
  readonly row: T;
}

export interface BodySelectionSlotData<T extends object = object>
  extends MultiSelectData {
  readonly row: T;
}

export interface Column<T extends object = object> {
  readonly align: Align;
  readonly field: Field<T>;
  readonly label: string;
  readonly maxWidth?: number;
  readonly minWidth?: number;
  readonly name: string;
  /**
   * Sorting function.
   *
   * @param value1 - Value 1.
   * @param value2 - Value 2.
   * @param row1 - Row 1.
   * @param row2 - Row 2.
   * @returns Comparison result.
   */
  readonly sort?: (value1: string, value2: string, row1: T, row2: T) => number;
  readonly sortOrder?: "ad" | "da";
  readonly sortable?: true;
  readonly width?: number;
}

export type ColumnWidths = ReadonlyMap<string, number>;

export type Columns<T extends object = object> = ReadonlyArray<Column<T>>;

export type ColumnsOrder = ReadonlyMap<string, number>;

export interface Field<T extends object = object> {
  /**
   * Returns formatted field.
   *
   * @param row - Row.
   */
  (row: T): string;
}

export type GlobalTable<T extends object = object> = GlobalComponent<
  TableProps<T>,
  TableSlots<T>
>;

export interface HeaderCellSlotData<T extends object = object>
  extends MultiSelectData {
  readonly column: Column<T>;
}

export interface HeaderMenuAppendSlotData extends MultiSelectData {}

export interface HeaderMenuPrependSlotData extends MultiSelectData {}

export interface HeaderSelectionSlotData extends MultiSelectData {}

export type HiddenColumns = ReadonlySet<string>;

export interface ModuleIcons {
  readonly ascending: true;
  readonly descending: true;
  readonly deselectAll: true;
  readonly manageColumns: true;
  readonly selectAll: true;
}

export interface ModuleWord {
  readonly DeselectAll: true;
  readonly ManageColumns: true;
  readonly SelectAll: true;
}

export interface MultiSelectData {
  readonly allSelected: booleanU;
  /**
   * Handles click.
   */
  readonly deselectAll: () => void;
  readonly deselectAllDisable: boolean;
  readonly deselectAllIcon: string;
  readonly deselectAllLabel: string;
  /**
   * Handles click.
   */
  readonly selectAll: () => void;
  readonly selectAllDisable: boolean;
  readonly selectAllIcon: string;
  readonly selectAllLabel: string;
  /**
   * Handles click.
   */
  readonly toggleSelection: () => void;
  readonly toggleSelectionDisable: boolean;
  readonly toggleSelectionIcon: string;
  readonly toggleSelectionLabel: string;
}

export interface Pagination {
  readonly descending?: boolean;
  readonly limit?: number;
  readonly page?: number;
  readonly rowsNumber?: number;
  readonly rowsPerPage?: number;
  readonly sortBy?: string;
}

export interface SteadyBottomSlotData extends MultiSelectData {}

export interface TableOwnProps<T extends object = object> {
  readonly binaryStateSortOff?: booleanU;
  readonly binaryStateSortOn?: booleanU;
  readonly columnWidths?: ColumnWidths;
  readonly columns?: Columns<T> | undefined;
  readonly columnsOrder?: ColumnsOrder;
  readonly externalSorting?: booleanU;
  readonly flatOff?: booleanU;
  readonly flatOn?: booleanU;
  readonly headerSeparatorOff?: booleanU;
  readonly headerSeparatorOn?: booleanU;
  readonly hiddenColumns?: HiddenColumns;
  readonly manageColumns?: boolean;
  readonly multiselect?: boolean;
  /**
   * Emits column order.
   *
   * @param value - Column order.
   */
  readonly "onUpdate:columnWidths"?: (value: ColumnWidths) => void;
  /**
   * Emits column order.
   *
   * @param value - Column order.
   */
  readonly "onUpdate:columnsOrder"?: (value: ColumnsOrder) => void;
  /**
   * Emits hidden columns.
   *
   * @param value - Hidden columns.
   */
  readonly "onUpdate:hiddenColumns"?: (value: HiddenColumns) => void;
  /**
   * Emits "pagination" value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:pagination"?: (value: Pagination) => void;
  /**
   * Emits "selected" value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:selected"?: (value: objects) => void;
  readonly pagination?: Pagination | undefined;
  readonly resizableColumns?: booleanU;
  readonly rowKey?: stringU;
  readonly rows?: readonly T[] | undefined;
  readonly selectByCheckbox?: booleanU;
  readonly selectByRowClick?: booleanU;
  readonly selected?: readonly T[] | undefined;
  readonly squareOff?: booleanU;
  readonly squareOn?: booleanU;
  readonly sticky?: boolean;
}

export interface TableParentProps
  extends Omit<
    QTableProps,
    | "binaryStateSort"
    | "columns"
    | "flat"
    | "onUpdate:pagination"
    | "onUpdate:selected"
    | "pagination"
    | "rowKey"
    | "rows"
    | "selected"
    | "selection"
    | "square"
  > {}

export interface TableProps<T extends object = object>
  extends TableParentProps,
    TableOwnProps<T> {}

export interface TableSettings {
  readonly binaryStateSort: boolean;
  readonly flat: boolean;
  readonly growPageBy: number;
  readonly headerSeparator: boolean;
  readonly square: boolean;
}

export interface TableSlots<T extends object = object>
  extends Omit<
    QTableSlots,
    | "body-cell"
    | "body-selection"
    | "header-cell"
    | "header-selection"
    | `body-cell-${string}`
  > {
  /**
   * Body cell slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "body-cell": (scope: BodyCellSlotData<T>) => readonly VNode[];
  /**
   * Body context menu slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "body-cell-context": (
    scope: BodyCellContextSlotData<T>
  ) => readonly VNode[];
  /**
   * Body context menu slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "body-context": (scope: BodyContextSlotData<T>) => readonly VNode[];
  /**
   * Body selection slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "body-selection": (
    scope: BodySelectionSlotData<T>
  ) => readonly VNode[];
  /**
   * Header cell slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "header-cell": (scope: HeaderCellSlotData<T>) => readonly VNode[];
  /**
   * Header menu append slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "header-menu-append": (
    scope: HeaderMenuAppendSlotData
  ) => readonly VNode[];
  /**
   * Header menu prepend slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "header-menu-prepend": (
    scope: HeaderMenuPrependSlotData
  ) => readonly VNode[];
  /**
   * Header selection slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "header-selection": (
    scope: HeaderSelectionSlotData
  ) => readonly VNode[];
  /**
   * Steady bottom slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "steady-bottom": (scope: SteadyBottomSlotData) => readonly VNode[];
}

export interface TableState {
  readonly columnWidths: ColumnWidths;
  readonly columnsOrder: ColumnsOrder;
  readonly descending: boolean;
  readonly hiddenColumns: HiddenColumns;
  readonly sortBy: string;
}

/**
 * Table state module.
 *
 * @param initialState - Initial state.
 * @param sortBy - Sort by.
 * @param descending - Descending.
 * @returns Table state module.
 */
export function useTableState(
  initialState: ComputedRef<TableState>,
  sortBy: ComputedRef<stringU>,
  descending: ComputedRef<booleanU>
): {
  columnWidths: Ref<ColumnWidths>;
  columnsOrder: Ref<ColumnsOrder>;
  hiddenColumns: Ref<HiddenColumns>;
  initialState: ComputedRef<TableState>;
  modified: ComputedRef<boolean>;
  state: ComputedRef<TableState>;
} {
  const columnWidths = ref<ColumnWidths>(initialState.value.columnWidths);

  const columnsOrder = ref<ColumnsOrder>(initialState.value.columnsOrder);

  const hiddenColumns = ref<HiddenColumns>(initialState.value.hiddenColumns);

  // eslint-disable-next-line no-warning-comments
  // fixme: Use json.eq
  const modified = computed<boolean>(
    () => json.encode(initialState.value) !== json.encode(state.value)
  );

  const state = computed<TableState>(() => {
    return {
      columnWidths: columnWidths.value,
      columnsOrder: columnsOrder.value,
      descending: descending.value ?? initialState.value.descending,
      hiddenColumns: hiddenColumns.value,
      sortBy: sortBy.value ?? initialState.value.sortBy
    };
  });

  return {
    columnWidths,
    columnsOrder,
    hiddenColumns,
    initialState,
    modified,
    state
  };
}
