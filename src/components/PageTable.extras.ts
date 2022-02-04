import * as is from "@skylib/functions/es/guards";
import { createValidationObject } from "@skylib/functions/es/types/core";

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
