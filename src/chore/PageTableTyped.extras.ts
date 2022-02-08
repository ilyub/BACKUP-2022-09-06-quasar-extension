import * as is from "@skylib/functions/es/guards";

import { isBodyCellSlotDataFactory } from "../components/PageTable.extras";

export interface TableItem {
  readonly id: number;
  readonly name: string;
}

export type TableItems = readonly TableItem[];

export const isTableItem: is.Guard<TableItem> = is.factory(
  is.object.of,
  {
    id: is.number,
    name: is.string
  },
  {}
);

export const isTableItems = is.factory(is.array.of, isTableItem);

export const isBodyCellSlotData = isBodyCellSlotDataFactory(isTableItem);
