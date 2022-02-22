import type {
  GlobalComponentConstructor,
  QTableProps,
  QTableSlots
} from "quasar";
import type { VNode } from "vue";

import * as is from "@skylib/functions/es/guards";
import type { numberU, stringU } from "@skylib/functions/es/types/core";
import { createValidationObject } from "@skylib/functions/es/types/core";

import { createInjectable } from "./api";

export type Align = "center" | "left" | "right";

export interface BodyCellSlotData<T = unknown> {
  readonly row: T;
  readonly value: string;
}

export interface Column<T = unknown> {
  readonly align: Align;
  readonly field: Field<T>;
  readonly label: string;
  readonly name: string;
  readonly sortable?: true;
}

export type Columns<T = unknown> = ReadonlyArray<Column<T>>;

export interface Field<T = unknown> {
  /**
   * Returns formatted field.
   *
   * @param row - Row.
   */
  (row: T): string;
}

export type GlobalPageTable<T = unknown> = GlobalComponentConstructor<
  PageTableProps<T>,
  PageTableSlots<T>
>;

export interface PageTableParentProps
  extends Omit<QTableProps, "columns" | "rows" | "selected"> {}

export interface PageTableOwnProps<T = unknown> {
  readonly columns?: Columns<T> | undefined;
  readonly extraPageOffset?: stringU;
  readonly limit?: numberU;
  readonly rows?: readonly T[] | undefined;
  readonly selected?: readonly T[] | undefined;
}

export interface PageTableProps<T = unknown>
  extends PageTableParentProps,
    PageTableOwnProps<T> {}

export interface PageTableSlots<T = unknown>
  extends Omit<QTableSlots, "body-cell"> {
  /**
   * Body cell slot.
   *
   * @param scope - Scope.
   * @returns Node.
   */
  readonly "body-cell": (scope: BodyCellSlotData<T>) => readonly VNode[];
}

export interface PageTableSettings {
  readonly growPageBy: number;
}

export const AlignVO = createValidationObject<Align>({
  center: "center",
  left: "left",
  right: "right"
});

export const isAlign = is.factory(is.enumeration, AlignVO);

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
 * Creates guard for BodyCellSlotData\<T\> type.
 *
 * @param guard - Guard for type T.
 * @returns Guard for BodyCellSlotData\<T\> type.
 */
export function isBodyCellSlotDataFactory<T = unknown>(
  guard: is.Guard<T>
): is.Guard<BodyCellSlotData<T>> {
  return is.factory(
    is.object.of,
    {
      row: guard,
      value: is.string
    },
    {}
  );
}

/**
 * Creates guard for Column\<T\> type.
 *
 * @returns Guard for Column\<T\> type.
 */
export function isColumnFactory<T = unknown>(): is.Guard<Column<T>> {
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
export function isColumnsFactory<T = unknown>(): is.Guard<Columns<T>> {
  return is.factory(is.array.of, isColumnFactory<T>());
}

/**
 * Creates guard for Field\<T\> type.
 *
 * @returns Guard for Field\<T\> type.
 */
export function isFieldFactory<T = unknown>(): is.Guard<Field<T>> {
  return is.callable;
}
