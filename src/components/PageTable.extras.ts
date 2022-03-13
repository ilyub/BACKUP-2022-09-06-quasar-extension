import type { QTableProps, QTableSlots } from "quasar";
import type { VNode } from "vue";

import * as is from "@skylib/functions/es/guards";
import type {
  booleanU,
  objects,
  stringU
} from "@skylib/functions/es/types/core";
import { createValidationObject } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";
import { createInjectable } from "./api";

export type Align = "center" | "left" | "right";

export interface BodyCellSlotData<T = object> {
  readonly row: T;
  readonly value: string;
}

export interface Column<T = object> {
  readonly align: Align;
  readonly field: Field<T>;
  readonly label: string;
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
}

export type Columns<T = object> = ReadonlyArray<Column<T>>;

export interface Field<T = object> {
  /**
   * Returns formatted field.
   *
   * @param row - Row.
   */
  (row: T): string;
}

// eslint-disable-next-line @skylib/prefer-readonly
export type GlobalPageTable<T = object> = GlobalComponent<
  PageTableProps<T>,
  PageTableSlots<T>
>;

export interface PageTableOwnProps<T = object> {
  readonly columns?: Columns<T> | undefined;
  readonly externalSorting?: booleanU;
  readonly extraPageOffset?: stringU;
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
  readonly selectByRowClick?: booleanU;
  readonly selected?: readonly T[] | undefined;
}

export interface PageTableParentProps
  extends Omit<
    QTableProps,
    | "columns"
    | "onUpdate:pagination"
    | "onUpdate:selected"
    | "pagination"
    | "rowKey"
    | "rows"
    | "selected"
  > {}

export interface PageTableProps<T = object>
  extends PageTableParentProps,
    PageTableOwnProps<T> {}

export interface PageTableSlots<T = object>
  extends Omit<QTableSlots, "body-cell"> {
  /**
   * Body cell slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "body-cell": (scope: BodyCellSlotData<T>) => readonly VNode[];
  /**
   * Steady bottom slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "steady-bottom": (scope: SteadyBottomSlotData) => readonly VNode[];
}

export interface SteadyBottomSlotData {
  readonly allSelected: booleanU;
  /**
   * Handles allSelected click.
   */
  readonly allSelectedClick: () => void;
  allSelectedDisable: boolean;
}

export interface PageTableSettings {
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
  inject: injectPageTableSettings,
  provide: providePageTableSettings,
  test: testPageTableSettings
} = createInjectable<PageTableSettings>(() => {
  return {
    growPageBy: 10
  };
});

/**
 * Creates guard for Column\<T\> type.
 *
 * @returns Guard for Column\<T\> type.
 */
export function isColumnFactory<T = object>(): is.Guard<Column<T>> {
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
export function isColumnsFactory<T = object>(): is.Guard<Columns<T>> {
  return is.factory(is.array.of, isColumnFactory<T>());
}

/**
 * Creates guard for Field\<T\> type.
 *
 * @returns Guard for Field\<T\> type.
 */
export function isFieldFactory<T = object>(): is.Guard<Field<T>> {
  return is.callable;
}
