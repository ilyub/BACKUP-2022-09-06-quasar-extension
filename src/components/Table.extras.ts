import type { QTableProps, QTableSlots } from "quasar";
import type { VNode } from "vue";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { DictionaryAndWords } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";
import * as is from "@skylib/functions/es/guards";
import type {
  booleanU,
  objects,
  stringU
} from "@skylib/functions/es/types/core";
import { createValidationObject } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";
import { createInjectable } from "./api";

declare global {
  namespace facades {
    namespace icons {
      interface Facade extends ModuleIcons {}
    }

    namespace lang {
      interface Word extends ModuleWord {}
    }
  }
}

export interface ModuleIcons {
  readonly ascending: string;
  readonly descending: string;
  readonly deselectAll: string;
  readonly manageColumns: string;
  readonly selectAll: string;
}

export interface ModuleWord {
  readonly DeselectAll: true;
  readonly ManageColumns: true;
  readonly SelectAll: true;
}

export type Align = "center" | "left" | "right";

export interface AllSelectedData {
  readonly allSelected: booleanU;
  /**
   * Handles allSelected click.
   */
  readonly allSelectedClick: () => void;
  readonly allSelectedDisable: boolean;
  readonly allSelectedIcon: string;
  readonly allSelectedLabel: string;
}

export interface BodyCellSlotData<T extends object = object>
  extends AllSelectedData {
  readonly column: Column<T>;
  readonly row: T;
}

export interface BodySelectionSlotData<T extends object = object>
  extends AllSelectedData {
  readonly row: T;
}

export interface HeaderCellSlotData<T extends object = object>
  extends AllSelectedData {
  readonly column: Column<T>;
}

export interface HeaderSelectionSlotData extends AllSelectedData {}

export interface SteadyBottomSlotData extends AllSelectedData {}

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
  /**
   * Updates column width.
   *
   * @param width - New width.
   */
  readonly updateWidth?: (width: number) => void;
  readonly width?: number;
}

export type Columns<T extends object = object> = ReadonlyArray<Column<T>>;

export const isColumnOrder = is.factory(is.map, is.string, is.number);

export const isHiddenColumns = is.factory(is.set, is.string);

export interface Field<T extends object = object> {
  /**
   * Returns formatted field.
   *
   * @param row - Row.
   */
  (row: T): string;
}

// eslint-disable-next-line @skylib/prefer-readonly
export type GlobalTable<T extends object = object> = GlobalComponent<
  TableProps<T>,
  TableSlots<T>
>;

export type ColumnOrder = ReadonlyMap<string, number>;

export type HiddenColumns = ReadonlySet<string>;

export interface TableOwnProps<T extends object = object> {
  readonly columnOrder?: ColumnOrder;
  readonly columns?: Columns<T> | undefined;
  readonly externalSorting?: booleanU;
  readonly hiddenColumns?: HiddenColumns;
  readonly multiselect?: boolean;
  /**
   * Emits column order.
   *
   * @param value - Column order.
   */
  readonly "onUpdate:columnOrder"?: (value: ColumnOrder) => void;
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
  readonly rowKey?: stringU;
  readonly rows?: readonly T[] | undefined;
  readonly selectByCheckbox?: booleanU;
  readonly selectByRowClick?: booleanU;
  readonly selected?: readonly T[] | undefined;
}

export interface TableParentProps
  extends Omit<
    QTableProps,
    | "columns"
    | "onUpdate:pagination"
    | "onUpdate:selected"
    | "pagination"
    | "rowKey"
    | "rows"
    | "selected"
    | "selection"
  > {}

export interface TableProps<T extends object = object>
  extends TableParentProps,
    TableOwnProps<T> {}

export interface TableSlots<T extends object = object>
  extends Omit<
    QTableSlots,
    "body-cell" | "body-selection" | "header-cell" | "header-selection"
  > {
  /**
   * Body cell slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "body-cell": (scope: BodyCellSlotData<T>) => readonly VNode[];
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

export interface TableSettings {
  readonly growPageBy: number;
}

export interface Pagination {
  readonly descending?: boolean;
  readonly limit?: number;
  readonly page?: number;
  readonly rowsNumber?: number;
  readonly rowsPerPage?: number;
  readonly sortBy?: string;
}

export const AlignVO = createValidationObject<Align>({
  center: "center",
  left: "left",
  right: "right"
});

export const isAlign = is.factory(is.enumeration, AlignVO);

export const isPagination: is.Guard<Pagination> = is.factory(
  is.object.of,
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
    growPageBy: 10
  };
});

export const icons: Icons<keyof ModuleIcons> = baseIcons;

export const lang: DictionaryAndWords<keyof ModuleWord> = baseLang;

/**
 * Creates guard for Column\<T\> type.
 *
 * @returns Guard for Column\<T\> type.
 */
export function isColumnFactory<T extends object = object>(): is.Guard<
  Column<T>
> {
  return is.factory(
    is.object.of,
    {
      align: isAlign,
      field: isFieldFactory<T>(),
      label: is.string,
      name: is.string
    },
    {
      sortable: is.true
    }
  );
}

/**
 * Creates guard for Columns\<T\> type.
 *
 * @returns Guard for Columns\<T\> type.
 */
export function isColumnsFactory<T extends object = object>(): is.Guard<
  Columns<T>
> {
  return is.factory(is.array.of, isColumnFactory<T>());
}

/**
 * Creates guard for Field\<T\> type.
 *
 * @returns Guard for Field\<T\> type.
 */
export function isFieldFactory<T extends object = object>(): is.Guard<
  Field<T>
> {
  return is.callable;
}
