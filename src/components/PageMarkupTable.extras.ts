import type { QMarkupTableProps, QMarkupTableSlots } from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";

export type GlobalPageMarkupTable = GlobalComponent<
  PageMarkupTableProps,
  PageMarkupTableSlots
>;

export type PageMarkupTableParentProps = QMarkupTableProps;

export interface PageMarkupTableOwnProps {
  readonly extraPageOffset?: stringU;
}

export interface PageMarkupTableProps
  extends PageMarkupTableParentProps,
    PageMarkupTableOwnProps {}

export type PageMarkupTableSlots = QMarkupTableSlots;
