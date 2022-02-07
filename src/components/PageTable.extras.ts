import type { QTableProps } from "quasar";

import * as is from "@skylib/functions/es/guards";
import type { numberU, stringU } from "@skylib/functions/es/types/core";
import { createValidationObject } from "@skylib/functions/es/types/core";

import type {
  PropOptions,
  PropOptionsRequired,
  PropsToPropOptions
} from "./api";
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

export type Field<T = unknown> = (row: T) => string;

export type PageTablePropOptions<T = unknown> = PropsToPropOptions<
  QTableProps,
  {
    readonly columns: PropOptionsRequired<Columns>;
    readonly extraPageOffset: PropOptions<stringU>;
    readonly limit: PropOptions<numberU>;
    readonly rows: PropOptionsRequired<readonly T[]>;
    readonly selected: PropOptions<readonly T[]>;
  }
>;

export interface PageTableSettings {
  readonly growPageBy: number;
}

export const AlignVO = createValidationObject<Align>({
  center: "center",
  left: "left",
  right: "right"
});

export const isAlign = is.factory(is.enumeration, AlignVO);

export const isBodyCellSlotData = is.factory(
  is.object.of,
  { row: is.unknown, value: is.string },
  {}
);

export const isField: is.Guard<Field> = is.callable;

export const isColumn: is.Guard<Column> = is.factory(
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

export const isColumns = is.factory(is.array.of, isColumn);

export const {
  inject: injectPageTableSettings,
  provide: providePageTableSettings,
  test: testPageTableSettings
} = createInjectable<PageTableSettings>(() => {
  return {
    growPageBy: 10
  };
});
