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

export interface Column<T> {
  readonly align: Align;
  readonly field: Field<T>;
  readonly label: string;
  readonly name: string;
  readonly sortable?: true;
}

export type Columns<T> = ReadonlyArray<Column<T>>;

export type Field<T> = (row: T) => string;

export type PageTablePropOptions = PropsToPropOptions<
  QTableProps,
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly columns: PropOptionsRequired<Columns<any>>;
    readonly extraPageOffset: PropOptions<stringU>;
    readonly limit: PropOptions<numberU>;
    readonly rows: PropOptionsRequired<readonly unknown[]>;
    readonly selected: PropOptions<readonly unknown[]>;
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

export const {
  inject: injectPageTableSettings,
  provide: providePageTableSettings,
  test: testPageTableSettings
} = createInjectable<PageTableSettings>(() => {
  return {
    growPageBy: 10
  };
});
